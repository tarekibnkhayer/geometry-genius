document.getElementById("triangleButton").addEventListener("click", function(){
    const base = getValueFromInputField("triangleBase");
    const height = getValueFromInputField("triangleHeight");
    if(isNaN(base) || isNaN(height)){
        alert("please give valid numbers");
        return;
    }
    if (base < 0 || height < 0){
        alert("please provide positive numbers");
        return;
    }
    const area = 0.5 * base * height;
    getInnerTextOfTextArea(area);
})
document.getElementById("rectangleButton").addEventListener("click", function(){
    const width = getValueFromInputField("rectangleWidth");
    const length = getValueFromInputField("rectangleLength");
    if(isNaN(width) || isNaN(length)){
        alert("please give valid numbers");
        return;
    }
    if(width < 0 || length < 0){
        alert("please provide positive numbers");
        return;
    }
    const area = width * length;
    getInnerTextOfTextArea(area);
})
document.getElementById("parallelogramButton").addEventListener("click", function(){
    const base = getValueFromInputField("parallelogramBase");
    const height = getValueFromInputField("parallelogramHeight");
    if(isNaN(base) || isNaN(height)){
        alert("please give valid numbers");
        return;
    }
    if (base < 0 || height < 0){
        alert("please provide positive numbers");
        return;
    }
    const area = base * height;
    getInnerTextOfTextArea(area);
})