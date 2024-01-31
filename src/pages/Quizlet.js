import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

function Quizlet(){
    const theme = createTheme({
        typography: {
          fontFamily: 'Silkscreen, sans-serif',
        },
      });

const Quizlet = () => {
  const [notes, setNotes] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);
        setNotes(jsonData);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    reader.readAsText(file);
  };
}

  return (
    <ThemeProvider theme={theme}>
        <Typography>
        <div style={{color: 'white', textAlign: 'center'}}>
            <h1>👽👽👽THIS IS A WIP PAGE👽👽👽</h1>
            <h2>About this page:</h2>
            <h3>Backend part of this project. Quizlet that takes in notes uploaded by users that stores, <br/>categorizes and displays said notes in a quiz type manner.</h3>
            {/* <input type="file" onChange={handleFileChange} />
            {notes && (
                <div>
                <h2>Notes Uploaded:</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(notes).map((question, index) => (
                        <tr key={index}>
                        <td>{question}</td>
                        <td>{notes[question]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            )} */}
        </div>
        </Typography>
    </ThemeProvider>
  );
};

export default Quizlet;
