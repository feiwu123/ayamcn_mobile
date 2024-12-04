
//复制内容到剪贴板
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea")

    textArea.style.position = 'fixed'
    textArea.style.top = 0
    textArea.style.left = 0
    textArea.style.width = '2em'
    textArea.style.height = '2em'
    textArea.style.padding = 0
    textArea.style.border = 'none'
    textArea.style.outline = 'none'
    textArea.style.boxShadow = 'none'
    textArea.style.background = 'transparent'
    textArea.value = text

    document.body.appendChild(textArea);

    textArea.select();

    try {
		if(document.execCommand('copy')){
			document.execCommand('copy');
			mui.toast("Successfully copied");
		}else{
			mui.toast("Copy failed");
		}
    }catch(err){
    	mui.toast('不能使用这种方法复制内容');
    }

    document.body.removeChild(textArea);
}

$(".select_languages").on("tap",function(){
	$("#select_language_list").removeClass('visible');
})

$("#select_language_list").on("tap",".listItem", function(e){
	var url = $(this).data('url');
	var name = $(this).data('name');
	$(this).parents(".popBox").addClass("visible");
	//切换语言
})

//弹窗隐藏
$('.boxshadow').on('tap',function(){
	var that = this;
	$(this).parents(".popBox").addClass("visible");
})