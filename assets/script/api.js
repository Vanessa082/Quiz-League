// load question from API
async function loadQuestion(){
    const APIUrl = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple';
    const result = await fetch(`${APIUrl}`)
    const data = await result.json();
    _result.innerHTML = "";
    showQuestion(data.results[0]);
}
