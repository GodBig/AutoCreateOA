$(document).ready(function () {
    function sleep(delay) {
        return new Promise(reslove => {
            setTimeout(reslove, delay)
        })
    }

    function loadScript(url) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        document.body.appendChild(script);
    }

    $("#spaceLi_4289267341202178867 > div.navName").click();
    !async function step1() {
        await sleep(1000);
        $("#topMenuNavContainer > ul.topNavContainer.lev1Ul > li.lev1Li.current > div.lev1Title.navTitleName").mouseenter();
        $("#lev2_-3767558859620594449 > div > div.navText").mouseenter().click();
        await sleep(1000);
        const step1_iframe = $("#\\32 345b75e240b5e797989ef83681a6a0bMenuIframe");
        step1_iframe.contents().find("#menuTabDiv > div:nth-child(22)").click();
        await sleep(1000);
        step1_iframe.contents().find("#detailIframe").contents().find("#add_span").mouseenter().click();
        await sleep(1000);
        let username = "none";
        let department = "none";
        let mainjob = "none";
        let job_level = "Staff";
        chrome.storage.local.get("oa_info", function (result) {
            const final_iframe = step1_iframe.contents().find("#detailIframe");
            final_iframe.contents().find("#name_text").val(result["oa_info"].name);
            username = result["oa_info"].email.split("@");
            final_iframe.contents().find("#loginName").val(username[0]);
            final_iframe.contents().find("#password").val("Cscecme8");
            final_iframe.contents().find("#password2").val("Cscecme8");
            final_iframe.contents().find("#primaryLanguange > option:nth-child(2)").attr("selected", true);
            final_iframe.contents().find("#deptName").attr(result["oa_info"].division);
            if (result["oa_info"].division !== "HQ") {
                final_iframe.contents().find("#deptName").val(result["oa_info"].division + "/" + result["oa_info"].department);
            } else {
                final_iframe.contents().find("#deptName").val(result["oa_info"].department);
            }
            final_iframe.contents().find("#code").val(result["oa_info"].employ_num);
            final_iframe.contents().find("#hiredate").val(result["oa_info"].joinday);
            final_iframe.contents().find("#primaryPost").val(result["oa_info"].position);
            let gender_flag = "男";
            if (result["oa_info"].gender === gender_flag) {
                final_iframe.contents().find("#gender > option:nth-child(2)").attr("selected", "selected");
            } else {
                final_iframe.contents().find("#gender > option:nth-child(3)").attr("selected", "selected");
            }
            final_iframe.contents().find("#birthday").val(result["oa_info"].birthday);
            final_iframe.contents().find("#telnumber").val(result["oa_info"].mobile);
            final_iframe.contents().find("#emailaddress").val(result["oa_info"].email);
            final_iframe.contents().find("#-5323013933008533774 > option").each(function () {
                if (result["oa_info"].nationality === $(this).text()) {
                    $(this).attr("selected", "selected");
                }
            });
            final_iframe.contents().find("#deptName").click();
            department = result["oa_info"].department;
            mainjob = result["oa_info"].position;
            job_level = result["oa_info"].level;
        });
        await sleep(1000);
        const add_iframe = $("iframe[id^='selectPeopleFrane_']")
        add_iframe.contents().find("#\\36 70869647114347-anchor").blur().focus().click();
        add_iframe.contents().find("#q").val(department);
        await sleep(500);
        add_iframe.contents().find("#common_search_ul > li:nth-child(2) > a > em").click();
        add_iframe.contents().find("#memberDataBody").attr("onclick", "selectOneMember(this)");
        add_iframe.contents().find("#memberDataBody > option").attr("selected", true)
        add_iframe.contents().find("#memberDataBody").click();
        await sleep(1000);
        document.querySelector("a.button.emphasize.ok").click();
        // document.getElementById("submit_depath").click();
        await sleep(1000);
        const menu_iframe = $("#2345b75e240b5e797989ef83681a6a0bMenuIframe");
        menu_iframe.contents().find("#detailIframe").contents().find("#levelName").focus().click();
        await sleep(500);
        const level_iframe = $("iframe[id^='selectPeopleFrane_']");
        level_iframe.contents().find("#q").focus().click().val(job_level);
        await sleep(500);
        level_iframe.contents().find("#common_search_ul > li:nth-child(2) > a > em").click();
        level_iframe.contents().find("#LevelDataBody").attr("onclick", "selectOne('Level', this)");
        level_iframe.contents().find("#LevelDataBody > option").attr("selected", true);
        level_iframe.contents().find("#LevelDataBody").click();
        await sleep(1000);
        document.querySelector("a.button.emphasize.ok").click();
        await sleep(1000);
        // 选择岗位
        menu_iframe.contents().find("#detailIframe").contents().find("#primaryPost").focus().click();
        await sleep(500);
        const job_iframe = $("iframe[id^='selectPeopleFrane_']");
        job_iframe.contents().find("#metadata_text_q").focus().click().val(mainjob);
        job_iframe.contents().find("#metadata_common_search_ul > li:nth-child(2) > a > em").click();
        job_iframe.contents().find("#PostDataBody").attr("onclick", "selectOne('Post', this)");
        job_iframe.contents().find("#PostDataBody > option:nth-child(1)").attr("selected", true)
        await sleep(500);
        job_iframe.contents().find("#PostDataBody > option:nth-child(1)").click();
        await sleep(1000);
        document.querySelector("a.button.emphasize.ok").click();
        // document.getElementById("submit_post").click();
        // 邪门，只有原生JavaScript能用。
        navigator.clipboard.writeText(mainjob);
        // $("div.selectorg-btn").empty().append('<a class="button emphasize ok" title="确定">确定</a>')
        // $("div.selectorg-btn > a.button.emphasize.ok").click();
        // $("#memberDataBody > option").focus().click();
        // $("iframe[id^='selectPeopleFrane_']").contents().find("span.select_selected").click();
        // const final_iframe = step1_iframe.contents().find("#detailIframe");
        // final_iframe.contents().find("#q").click().val(department);
        // $("#selectPeopleFrane_1688558884934").contents().find("#common_search_ul > li:nth-child(2) > a").click();
    }()
});
