"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuestionsById = exports.saveQuestion = exports.getAllQuestionByLevelId = void 0;
const database_1 = require("../config/database");
const getAllQuestionByLevelId = (question) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.pool.query(`SELECT * FROM Question WHERE idLevel = ${question.idLevel}`);
});
exports.getAllQuestionByLevelId = getAllQuestionByLevelId;
const saveQuestion = (question) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.pool.query(`INSERT INTO Question (question, idlevel) VALUES ('${question.question}', ${question.idLevel}) RETURNING id`);
    return query;
});
exports.saveQuestion = saveQuestion;
const getQuestionsById = (level) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.pool.query(`SELECT * FROM Question WHERE idLevel = ${level}`);
    return query;
});
exports.getQuestionsById = getQuestionsById;
