const process = ()=>{
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value

    let data1 = input1.split("#").map(Number)
    let data2 = input2.split("#").map(Number)

    let row1 = data1[0],row2 = data2[0];
    let col1 = data1[1],col2 = data2[1];
    let val1 = data1[2],val2 = data2[2];

    let table1 = document.getElementById("table1")
    let table2 = document.getElementById("table2")
    let table3 = document.getElementById("table3")
    let tbl1_R = ""
    let tbl1 = ""

    let tbl2_R = ""
    let tbl2 = ""
    
    let tbl3 = ""
    let tbl3_R = ""

    let mat1 = []
    let mat2 = []
    let res = []

    for (let i = 0; i < row1; i++) {
        let lst = []
        tbl1_R = "<tr>"
        num = val1 * (i+1)
        for (let j = 0; j < col1; j++) {

            tbl1_R+=`<td>${num}</td>`
            lst.push(num)
            num = num+i+1;
            
            
            
        }
        tbl1_R+="</tr>"
        tbl1+=tbl1_R;
        mat1.push(lst)
    }
    table1.innerHTML = tbl1;


    for (let i = 0; i < row2; i++) {
        let lst = []
        num = val2 * (i+1)
        tbl2_R="<tr>"
        for (let j = 0; j < col2; j++) {
            tbl2_R+=`<td>${num}</td>`
            lst.push(num)
            num = num+i+1;
            
            
        }
        tbl2_R+="</tr>"
        tbl2+=tbl2_R
        mat2.push(lst)
        
    }
    table2.innerHTML = tbl2


    if(val1==val2)
    {
        for (let i = 0; i < row1; i++) {
            tbl3_R = "<tr>"
            num = val1 * (i+1)
            for (let j = 0; j < col1; j++) {
    
                tbl3_R+=`<td>${num}</td>`
                num = num+i+1;
                
                
            }
            tbl3_R+="</tr>"
            tbl3+=tbl3_R;
        }
        table3.innerHTML = tbl1;
    }

    else{
        let res = new Array(3)
        for (let i = 0; i < row2; i++) {
            res[i] = new Array(3)
            
            
        }
        multiply(mat1,mat2,res)

        for (let i = 0; i < 3; i++) {
            tbl3_R = "<tr>"
            for(let j = 0;j<3;j++){
                tbl3_R+=`<td>${res[i][j]}</td>`

            }
            tbl3_R+="</tr>"
            tbl3+=tbl3_R;
            
        }
        table3.innerHTML = tbl3;
    }

}

function multiply(mat1, mat2, res) {
    let i, j, k;
    console.log(mat1)
    console.log(mat2)
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            res[i][j] = mat1[i][j] * mat2[i][j]
        }
    }
    console.log(res)
}