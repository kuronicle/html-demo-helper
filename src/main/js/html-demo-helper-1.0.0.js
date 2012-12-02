/**
 * 
 */
var helper = {
	// 状態選択BOX(divタグ)のID。
	stateListBoxId : 'stateListBox',
	// 状態リスト(selectタグ)のID。
	stateListId : 'stateList',
	// 状態クラスのプレフィックス。（例:state01, state02）
	stateClassPrefix : 'state',
	// 状態選択BOXの表示行数。
	stateListDispSize : '10',
	// 状態クラスの最大数。
	stateListMaxSize : '10',
	// 状態選択BOXのボタン表示。
	buttonValue : 'Chage State',
	
	changeState : function() {
		// 選択された状態リストを取得する。
		var selectedStateList = new Array();
		$('#' + helper.stateListId + ' option:selected').each(function(i){
			selectedStateList.push($(this).val());
		});
		
		// 状態クラスが指定された要素ごとに表示要否を確認する。
		$('[class*="' + helper.stateClassPrefix + '"]').each( function(i){
			// 状態リストが選択されていない場合、要素を表示しない。
			if(selectedStateList.length == 0){
				$(this).css('display', 'none');
				return;
			}
			
			// 選択された状態を表示し、選択されていない状態は表示しない。
			for(i in selectedStateList){
				if($(this).attr('class').indexOf(selectedStateList[i]) != -1){
					$(this).css('display', '');
					return;
				} else {
					$(this).css('display', 'none');
				}
			}
		});
	},
	
	makeStateSelectBoxHtml : function(){
		// 状態選択BOXのHTMLを作成する。
		var html = '<div id="'+ helper.stateListBoxId + '" style="padding:5px;font-size:12px;background-color:black;color:white;opacity:0.8;width:100px;">状態選択BOX<br />';
		html += '<select id="' + helper.stateListId + '" size="' + helper.stateListDispSize + '" multiple style="margin:5px 0px;">';
		for(var i=1; i <= helper.stateListMaxSize; i++){
			var stateClass = helper.stateClassPrefix + ('0' + i).slice(-2);
			html += '<option value="' + stateClass + '">' + stateClass + '</option>'; 
		}
		html += '</select><br />';
		html += '<input type="button" onclick="helper.changeState();" value="' + helper.buttonValue +'" />';
		html += '</div>';
		return html;
	},
	
	init : function() {
		// 初期化処理。
		// 状態選択BOXを画面下部に追加する。
		$('body').append(helper.makeStateSelectBoxHtml());
	}
};

$(function(){
	// 初期化処理を実行する。
	helper.init();
});
