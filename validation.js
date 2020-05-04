function InputHopLe(nodeForm) {
    let ok = true;


    let arrayInput = nodeForm.getElementsByTagName('input');

    for (let i = 0; i < arrayInput.length; i++) {
        let nodeInput = arrayInput[i];
        let teninput = nodeInput.getAttribute('name');

        if (nodeInput.hasAttribute('notnull')) {

            if (nodeInput.value.length == 0) {

                hienthiloi(teninput, "không được để trống", nodeInput.nextElementSibling);
                ok = false;
                continue;
            }
        }
        if (nodeInput.hasAttribute('lonhon0')) {
            if (parseInt(nodeInput.value) < 0) {
                hienthiloi(teninput, "phải lớn hơn 0", nodeInput.nextElementSibling);
                ok = false;
            }
        }


    }

    return ok;
}

function hienthiloi(teninput, thongbao, nodeError) {
    nodeError.innerHTML = teninput + " " + thongbao;
}

function onInputChange() {
    let nodeError = event.target.nextElementSibling;
    nodeError.innerHTML = "";
}