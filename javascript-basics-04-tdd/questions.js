const stringSize = (text) => {
  return text.length;
};
const replaceCharacterE = (text) => {
  return text.replace("e", " ");
};
const concatString = (text1, text2) => {
  var text = text1 + text2;
  return text;
};
const showChar5 = (text) => {
  return text.charAt(4);
};
const showChar9 = (text) => {
  return text.slice(0, 9);
};
const toCapitals = (text) => {
  return text.toLocaleUpperCase();
};
const toLowerCase = (text) => {
  return text.toLocaleLowerCase();
};
const removeSpaces = (text) => {
  return text.trim();
};
const IsString = (text) => {
  if (typeof text === "string") {
    return true;
  }
};

const getExtension = (text) => {
  return text.split(".").pop();
};
const countSpaces = (text) => {
  return text.split(" ").length - 1;
};
const InverseString = (text) => {
  return text.split("").reverse().join("");
};

const power = (x, y) => {
  return Math.pow(x, y);
};
const absoluteValue = (num) => {
  return Math.abs(num);
};
const absoluteValueArray = (array) => {
  var newArray = [];

  array.forEach((element) => {
    newArray.push(Math.abs(element));
  });

  return newArray;
};
const circleSurface = (radius) => {
  return Math.round(Math.PI * radius * radius);
};
const hypothenuse = (ab, ac) => {
  return Math.hypot(ab, ac);
};
const BMI = (weight, height) => {
  return Math.round((weight / (height * height)) * 100) / 100;
};

const createLanguagesArray = () => {
  var array = ["Html", "CSS", "Java", "PHP"];
  return array;
};

const createNumbersArray = () => {
  var array = [0, 1, 2, 3, 4, 5];
  return array;
};

const replaceElement = (languages) => {
  for (var i = 0; i < languages.length; i++) {
    if (i == 2) {
      languages[i] = "Javascript";
    }
  }

  return languages;
};

const addElement = (languages) => {
  languages.push("Ruby");
  languages.push("Python");

  return languages;
};

const addNumberElement = (numbers) => {
  numbers.unshift(-2, -1);
  return numbers;
};

const removeFirst = (languages) => {
  languages.shift();
  return languages;
};

const removeLast = (languages) => {
  languages.pop();
  return languages;
};

const convertStrToArr = (social_arr) => {
  var array = social_arr.split(",");
  return array;
};

const convertArrToStr = (languages) => {
  var string = languages.toString();
  return string;
};

const sortArr = (social_arr) => {
  return social_arr.sort();
};

const invertArr = (social_arr) => {
  return social_arr.reverse();
};
