document.addEventListener("DOMContentLoaded", function () {
    // Retrieve parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieName = urlParams.get('name');
    const posterPath = urlParams.get('posterPath');
    const genre = urlParams.get('genre')

    // Log the retrieved parameters
    console.log('Movie Name:', movieName);
    console.log('Poster Path:', posterPath);

    // Update the HTML content with movie details
    const movieNameElement = document.getElementById('movieName');
    movieNameElement.textContent = movieName;

    const posterImgElement = document.getElementById('posterImg');
    posterImgElement.src = posterPath;
    posterImgElement.alt = `${movieName} Poster`;

    const genreElement = document.getElementById('genre');
    genreElement.textContent = genre;

    
});

const { exec } = require('child_process');

const notebookName = 'content_based.ipynb';
const variableValue = movieName;

exec(`jupyter nbconvert --to notebook --execute ${notebookName} --stdout --Application.allow_origin='.*$' --executePreprocessor.timeout=-1 --Application.log_level='DEBUG' --Variable="${variableValue}"`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    console.log(`Output: ${stdout}`);
    console.error(`Errors: ${stderr}`);
});
