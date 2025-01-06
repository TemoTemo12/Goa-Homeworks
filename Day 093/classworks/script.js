let tx = setinterval(moveX, 1)
let pos = 0
const box= document.getElementsByClassName("box")[0]

function noveX() {
    if (pos >= 300) {
        clearInterval(tx)
        let ty = setInterval(moveY, 1)
        function moveY() {
            if (pos >= 0){
                pos--
                box.style.bottom = pos + "px"
        
            } else{
                clearInterval(ty)
                let tYX = setInterval(moveYX, 1)
                function moveYX() {
                    if(pos <= 300)
                        pos ++
                    box.style.left = null
                    box.style.right = pos + "px"
                } else{
                    clearInterval(tYX)
                    console.log('time stop')
                    let tYXY = setinterval(moveYXY, 1)
                    function moveYXY() {
                        if(pos >= 0) {
                            console.log(pos)
                            pos--
                            box.style.yop = pos + "px"
                        } else {
                            clearInterval(tYXY)
                            box.style.top = null
                            box.style.bottom = null
                            box.style.left = null
                            box.style.right = null
                        }
                    }

                }
            }
        }       

        } else{
            pos++
            box.style.left = pos + "px"
        }

    } 

