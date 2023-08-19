function getValueFromInputField(inputFieldId){
const inputField = document.getElementById(inputFieldId);
let inputFieldValueString = inputField.value ;
const inputFieldValue = parseFloat(inputFieldValueString);
inputField.value = "";
return inputFieldValue;
}
function getInnerTextOfTextArea (value){
    const textarea = document.getElementById("textarea");
    textarea.innerHTML = value + " centimeter square";
}