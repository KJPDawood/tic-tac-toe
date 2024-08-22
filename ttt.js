let currentPlayer = "X";
        let cells = document.querySelectorAll(".box");

        function makeMove(index) {
            if (!cells[index].textContent) {
                cells[index].textContent = currentPlayer;
                if (checkWinner()) {
                    alert(currentPlayer + " wins!");
                    resetGame();
                    return;
                }
                if (checkDraw()) {
                    alert("It's a draw!");
                    resetGame();
                    return;
                }
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }

        function checkWinner() {
            const winConditions = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6]             // Diagonals
            ];

            return winConditions.some(condition => {
                const [a, b, c] = condition;
                return cells[a].textContent && 
                       cells[a].textContent === cells[b].textContent && 
                       cells[a].textContent === cells[c].textContent;
            });
        }

        function checkDraw() {
            return [...cells].every(cell => cell.textContent !== "");
        }

        function resetGame() {
            cells.forEach(cell => cell.textContent = "");
            currentPlayer = "X";
        }
   