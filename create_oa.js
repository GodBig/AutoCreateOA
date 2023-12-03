$(document).ready(function () {
    setTimeout(function (){
        let division = $("#field0106_id > section > div.cap4-text__right.field-content-wrapper.flex > div > span").text();
        let department = $("#field0107_id > section > div.cap4-field-choose__right.field-content-wrapper > div").text();
        let name = $("#field0099_id > section > div.cap4-text__right.field-content-wrapper > div").text();
        let gender = $("#field0100_id > section > div.cap4-select__right.field-content-wrapper > div").text();
        let birthday = $("#field0101_id > section > div.cap4-date__right.field-content-wrapper > div").text();
        let nationality = $("#field0102_id > section > div.cap4-select__right.field-content-wrapper > div").text();
        let joinday = $("#field0103_id > section > div.cap4-date__right.field-content-wrapper > div").text();
        let employ_num = $("#field0104_id > section > div.cap4-text__right.field-content-wrapper > div").text();
        let position = $("#field0109_id > section > div.cap4-text__right.field-content-wrapper > div").text();
        let level = $("#field0110_id > section > div.cap4-select__right.field-content-wrapper > div").text()
        let mobile = $("#field0113_id > section > div.cap4-text__right.field-content-wrapper > div").text().replace(/\s+/g, "");
        if (mobile === "NA"){
            mobile = "0";
        }
        let email = $("#field0115_id > section > div.cap4-text__right.field-content-wrapper > div").text();
        if (email === "NA"){
            email = $("#field0114_id > section > div.cap4-text__right.field-content-wrapper > div > span").text();
        } else if(email === ""){
            email = $("#field0114_id > section > div.cap4-text__right.field-content-wrapper > div > span").text();
        }
        const oa_info = {division: division, department: department, name: name.replace("/", "-"),
            gender: gender.replace(/\s+/g, ""),birthday: birthday,nationality: nationality.replace(/\s+/g, ""),joinday: joinday,
            employ_num: employ_num, position: position, level: level.replace(/\s+/g, ""),mobile: mobile,email: email.toLowerCase()}
        chrome.storage.local.set({"oa_info": oa_info}, function () {
                console.log('简历信息保存成功！'+oa_info.name+oa_info.gender);
            });
        const domain = window.location.host;
        const real_domain = domain.split("seeyon")[0];
        // console.log(domain, real_domain);
        window.open("https://"+real_domain + "/seeyon/main.do?method=main&");
        $("#print4").click();
    }, 2000);
});
