function check1() {
    var data = document.getElementById("line1").value;
    var thongBao = document.getElementById("thongBao1");
    var check = /[\w]{6,}/;
    if(data=="") {
        thongBao.innerHTML = "<p>Vui lòng điền thông tin</p>";
    }
    else{
        if(check.test(data)){
            thongBao.innerHTML = "<p>(*)</p>";
            return data;
        }
        else{
            thongBao.innerHTML = "<p>Số serial có thể gồm các ký tự chữ cái hoa, dấu _ và các ký số; chiều dài ít nhất là 6</p>";
            return "";
        }
    }
}
function check2(){
    var data = document.getElementById("line2").value;
    var thongBao = document.getElementById("thongBao2");
    if(data == "") {
        thongBao.innerHTML = "<p>Vui lòng điền thông tin</p>";
        return "";
    }
    else{
        thongBao.innerHTML = "<p>(*)</p>";
        return data;
    }
}

function check4() {
    var data = document.getElementById("line4").value;
    var data2 = document.getElementById("line5");
    var thongBao = document.getElementById("thongBao3");
    if(data == "") {
        thongBao.innerHTML = "<p>Vui lòng điền thông tin</p>";
        data2.setAttribute("value", "");
        return "";
    }
    else{
        if(parseFloat(data) > 0) {
            thongBao.innerHTML = "<p>(*)</p>";
            if(parseFloat(data) >= 1 && parseFloat(data) <= 20) {
                data2.setAttribute("value","35000đ");
            }
            else if(parseFloat(data) >= 21 && parseFloat(data) <= 50) {
                data2.setAttribute("value","30000đ");
            }
            else{
                data2.setAttribute("value", "15000đ");
            }
            return data;
        }
        else{
            thongBao.innerHTML = "<p>Trọng lượng là số > 0</p>";
            data2.setAttribute("value", "");
            return "";
        }
    }
}
var count = 0;
function save() {
    
    if(check1() != "" && check2() != "" && check4() != "") {
        count++;
        var myTable = document.getElementById("myTable");
        var row = myTable.insertRow(count);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = count;
        cell2.innerHTML = check1();
        cell3.innerHTML = check2();
        cell4.innerHTML = document.getElementById("line3").value;
        cell5.innerHTML = check4();
        cell6.innerHTML = document.getElementById("line5").value;
        document.getElementById("myForm").reset();
        document.getElementById("line5").setAttribute("value","");
        document.getElementById("myClose").setAttribute("data-dismiss","modal");
    }
    else{
        document.getElementById("myClose").setAttribute("data-dismiss","");
    }
}