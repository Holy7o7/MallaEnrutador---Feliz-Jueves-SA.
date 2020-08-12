// localhost:3000/lista
import dataMalla from "../data.json";
import { css } from "@emotion/react";
import { useState } from "react";
import navBar from "../src/navbar";

const semestres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const colorSemestres = [
  "rgb(89,49,148)",
  "rgb(68,53,144)",
  "rgb(49,49,149)",
  "rgb(47,55,153)",
  "rgb(37,60,153)",
  "rgb(23,73,157)",
  "rgb(21,85,172)",
  "rgb(12,90,172)",
  "rgb(7,103,179)",
  "rgb(0,111,190)",
  "rgb(1,121,197)",
  "rgb(0,135,205)",
];

const PaginadeLista = () => {
  const [cursosClickeados, setCursosClickeados] = useState({});
  const [semestreActive, setSemestreActive] = useState(null);

  return (
    <div
      css={css`
        width: 100%;
        display: block;
      `}
    >
      <nav>{navBar()}</nav>
      <div
        css={css`
          display: flex;
          width: 100%;
          padding-bottom: 1%;
          flex-direction: row;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 20%;
            margin-left: -0.8%;
            float: left;
            padding-left: 20%;
            padding-top: 5%;
          `}
        >
          {semestres.map((semestre) => {
            return (
              <button
                css={css`
                  font-size: 20px;
                  color: white;
                  text-align: left;
                  padding: 3px 2px;
                  background-color: ${colorSemestres[semestre]};
                  border: ${semestreActive === semestre ? "white" : "black"} 1px
                    solid;
                `}
                key={semestre}
                onClick={() => {
                  setSemestreActive(semestre);
                }}
              >
                <input type="checkbox"></input>
                SEMESTRE {semestre}
              </button>
            );
          })}
        </div>
        <div
          css={css`
            display: inline-flex;
            float: right;
            flex-direction: column;
            width: 40%;
            padding-top: 5%;
            padding-left: 2%;
          `}
        >
          {dataMalla.malla.map((curso) => {
            return semestreActive === curso.semester ? (
              <button
                css={css`
                  background-color: ${colorSemestres[semestreActive]};
                  border-radius: 0px;
                  border: ${cursosClickeados[curso.id] ? "white" : "black"} 1px
                    solid;
                  padding: 10px 10px;
                  font-size: 16px;
                  font-weight: bold;
                  color: white;
                  text-align: left;
                  transition: box-shadow 0.5s;
                `}
                key={curso.id}
                onClick={() => {
                  setCursosClickeados(() => {
                    return {
                      ...cursosClickeados,
                      [curso.id]: !(
                        cursosClickeados[
                          curso.id
                        ] /** indefinido o true o false */
                      ),
                    };
                  });
                }}
              >
                <input type="checkbox"></input>

                {curso.name}
              </button>
            ) : null;
          })}
        </div>
      </div>
      <div
        css={css`
          float: left;
          padding-left: 25%;
        `}
      >
        <button
          css={css`
            border: 2px solid black;
            background-color: #8000ff;
            color: white;
            padding: 14px 28px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 30px;
            transition: all 0.3s ease 0s;
            display: inline-block;
            text-align: center;
            :hover {
              background-color: #800080;
              border: 2px solid white;
            }
          `}
        >
          Generar
        </button>
      </div>
    </div>
  );
};

export default PaginadeLista;
