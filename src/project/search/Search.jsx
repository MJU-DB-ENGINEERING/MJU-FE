import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchProject } from "../../common/api";
import { getCustomerName } from "../../common/api";

function Search() {
  const [projectName, setProjectName] = useState("");
  const [projectInfo, setProjectInfo] = useState("");

  const handleInputProjectName = (e) => {
    setProjectName(e.target.value);
  };

  const columnData = [
    {
      Header: "프로젝트 ID",
    },
    {
      Header: "프로젝트 이름",
    },
    {
      Header: "발주처",
    },
    {
      Header: "시작일",
    },
    {
      Header: "종료일",
    },
  ];

  const onClickSearch = () => {
    console.log("click search");
    console.log("ProjectName : ", projectName);
    searchProject(projectName).then((res) => {
      if (res.status === 500 || res.status === 404) {
        setProjectInfo("");
        alert("해당 이름의 프로젝트가 없습니다.");
      } else {
        setProjectInfo(res);
      }
    });
    console.log(projectInfo);
  };

  return (
    <div>
      <div>
        <label htmlFor="input_pw">프로젝트 이름 </label>
        <input
          type="text"
          name="project_name"
          value={projectName}
          onChange={handleInputProjectName}
        />
        <button type="button" onClick={onClickSearch}>
          검색
        </button>
      </div>
      <h3>Test Project: 써머프로젝트2</h3>
      {projectInfo === "" ? (
        <div></div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                {columnData.map((i) => (
                  <th key={i.Header}>{i.Header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <td>{projectInfo.id}</td>
              <td>{projectInfo.projectName}</td>
              <td>{getCustomerName(projectInfo.customerId)}</td>
              <td>{projectInfo.startDate}</td>
              <td>{projectInfo.endDate}</td>
              <td>
                <h3>
                  <Link to={{
                    pathname: `/project/${projectInfo.id}/evaluation`
                  }}
                  state= {{
                    projectTitle: projectInfo.projectName,
                    endDate: projectInfo.endDate,
                    customer: projectInfo.customerId,
                  }}>
                    이동하기
                  </Link>
                </h3>
              </td>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
export default Search;
