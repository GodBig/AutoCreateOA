$(document).ready(function () {
    $("#menuTabDiv > div:nth-child(22)").click();
    setTimeout(function (){
        $("#detailIframe").contents().find("#add_span").click();
        const final_iframe = $("#detailIframe");
        let username = "none";
        let default_info = {name: "none"};
        chrome.storage.local.get("oa_info", function (result){
            final_iframe.contents().find("#name_text").val(result["oa_info"].name);
            username = result["oa_info"].email.split("@");
            final_iframe.contents().find("#loginName").val(username[0]);
            final_iframe.contents().find("#password").val("cseceme");
            final_iframe.contents().find("#password2").val("cseceme");
            final_iframe.contents().find("#primaryLanguange > option:nth-child(2)").attr("selected", true);
            final_iframe.contents().find("#deptName").attr(result["oa_info"].division);
            final_iframe.contents().find("#primaryLanguange > option:nth-child(2)").attr("selected", true);
            if (result["oa_info"].division !== "HQ"){
                final_iframe.contents().find("#deptName").val(result["oa_info"].division + "/" + result["oa_info"].department);
            } else {
                final_iframe.contents().find("#deptName").val(result["oa_info"].department);
            }
            final_iframe.contents().find("#code").val(result["oa_info"].employ_num);
            final_iframe.contents().find("#primaryPost").val(result["oa_info"].position);
            if (result["oa_info"].gender === "男"){
                final_iframe.contents().find("#gender > option:nth-child(2)").attr("selected", true);
            } else {
                final_iframe.contents().find("#gender > option:nth-child(3)").attr("selected", true);
            }
            final_iframe.contents().find("#birthday").val(result["oa_info"].birthday);
            final_iframe.contents().find("#telnumber").val(result["oa_info"].mobile);
            final_iframe.contents().find("#emailaddress").val(result["oa_info"].email);
            final_iframe.contents().find("#-5323013933008533774 option").each(function (){
                if($(this).text() === result["oa_info"].nationality){
                    $(this).attr("selected", "selected");
                }
            })
        })
    }, 2000)
});
