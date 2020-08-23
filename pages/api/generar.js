import { NextApiResponse, NextApiRequest } from "next";
import { db } from "../../src/api/db";
import _ from "lodash";
import data from "../../data.json";
import { potentialCourses } from "../../src/api/academicPlanning";
/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function (req, res) {
  const cursosClickeados = req.body;
  const cursosAprobados = _.filter(
    Object.entries(cursosClickeados),
    ([curso, bool]) => {
      return bool;
    }
  ).map(([curso, bool]) => {
    return parseInt(curso);
  });
  const cursosPendientes = data.malla.filter((curso) => {
    return !cursosAprobados.includes(curso.id);
  });

  res.send(potentialCourses(cursosAprobados, cursosPendientes));
}