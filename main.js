function chessboard() {
    let newTable = document.createElement( 'table' ),
        lets = [ '','A','B','C','D','E','F','G','H','' ],
        black1 = [ '8','♜','♞','♝','♛','♚','♝','♞','♜','8' ],
        white1 = [ '1','♖','♘','♗','♕','♔','♝','♗','♖','1' ],
        black2 = [ '7','♟','♟','♟','♟','♟','♟','♟','♟','7' ],
        white2 = [ '2','♙','♙','♙','♙','♙','♙','♙','♙','2' ];
    for ( let i = 0, a = 9; i < 10, a >= 0; i++, a-- ) {
        let newTr = newTable.insertRow(i);
        for ( let j = 0; j < 10; j++ ) {
            let newTd = newTr.insertCell( j );
                        switch (i) {
                case 0:
                    newTd.innerText = lets[ j ];
                    break;
                case 1:
                    newTd.innerHTML = black1[ j ];
                    break;
                case 2:
                    newTd.innerHTML = black2[ j ];
                    break;
                case 7:
                    newTd.innerHTML = white2[ j ];
                    break;
                case 8:
                    newTd.innerHTML = white1[ j ];
                    break;
                case 9:
                    newTd.innerText = lets[ j ];
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.body.appendChild( newTable );
};
chessboard();