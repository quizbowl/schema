import React, { useState } from "react";
import generateFileData from "../generateFileData";

const GenerateFile = () => {
  const [teams, setTeams] = useState(4);
  const [rounds, setRounds] = useState(0);
  const [includeMatchQuestions, setIncludeMatchQuestions] = useState(false);
  const [canDisplayInline, setCanDisplayInline] = useState(true);
  const [verbose, setVerbose] = useState(false);

  const [latestResult, setLatestResult] = useState(
    generateFileData({ teams, rounds, includeMatchQuestions, verbose })
  );

  function handleSubmit(event) {
    event.preventDefault();
    setLatestResult(
      generateFileData({ teams, rounds, includeMatchQuestions, verbose })
    );
    setCanDisplayInline(
      !verbose &&
        teams < 6 &&
        rounds < 2 &&
        (rounds == 0 || !includeMatchQuestions)
    );
  }

  function handleDownload(event) {
    event.preventDefault();
    const link = document.createElement("a");
    link.download = `generated.qbj`;
    const blob = new Blob([JSON.stringify(latestResult)], {
      type: "application/octet-stream"
    });
    link.href = URL.createObjectURL(blob);
    link.click();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <th>
                <label htmlFor="teams">Teams</label>
              </th>
              <td>
                <input
                  id="teams"
                  type="number"
                  min="4"
                  max="384"
                  step="2"
                  value={teams}
                  onChange={event => setTeams(+event.target.value)}
                />
              </td>
              <td>
                <i>Must be an even number</i>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="rounds">Rounds</label>
              </th>
              <td>
                <input
                  id="rounds"
                  type="number"
                  min="0"
                  max="30"
                  value={rounds}
                  onChange={event => setRounds(+event.target.value)}
                />
              </td>
              <td>
                <i>Set this to zero to include just rosters</i>
              </td>
            </tr>
            <tr>
              <th colSpan={2}>
                <input
                  id="includeMatchQuestions"
                  type="checkbox"
                  checked={includeMatchQuestions}
                  onChange={event =>
                    setIncludeMatchQuestions(event.target.checked)
                  }
                />{" "}
                <label htmlFor="includeMatchQuestions">
                  Include question-by-question data
                </label>
              </th>
              <td>
                <i>
                  When unchecked, file will include
                  <br />
                  only summary match results
                </i>
              </td>
            </tr>
            <tr>
              <th colSpan={2}>
                <input
                  id="verbose"
                  type="checkbox"
                  checked={verbose}
                  onChange={event => setVerbose(event.target.checked)}
                />{" "}
                <label htmlFor="verbose">Verbose mode</label>
              </th>
              <td>
                <i>
                  When checked, file will include values
                  <br />
                  for all optional properties
                </i>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Generate file" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {canDisplayInline ? (
        <pre style={{ overflow: "scroll", maxHeight: "400px" }}>
          {JSON.stringify(latestResult, null, "  ")}
        </pre>
      ) : (
        <p className="preBackground">
          This file is too big to display inline but you can still download it
          below.
        </p>
      )}
      <a href="#" onClick={handleDownload}>
        Download as QBJ file
      </a>
    </>
  );
};

export default GenerateFile;
