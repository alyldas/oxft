import * as oxft from "./scripts/oxford-test.js";
let sectionInstr = document.getElementById("instruction");
let sectionUserInfo = document.getElementById("userInfo");
let sectionQuestion = document.getElementById("question");
let sectionResults = document.getElementById("results");
let secitonChart = document.getElementById("chart");

oxft.parameters.document = document;
oxft.parameters.instruction.element = sectionInstr;
oxft.parameters.userInfo.element = sectionUserInfo;
oxft.parameters.questions.element = sectionQuestion;
oxft.parameters.results.element = sectionResults;

oxft.startTest();
