/*:
 * @plugindesc
 * Title 관련 Options
 * Title関連のOptions
 *
 * @author Kioryu
 *
 * @param TitleColor
 * @desc
 * Title 글자 색깔
 * Title文字の色
 * @default black
 *
 * @param FontSize
 * @desc
 * Title 글자 크기
 * Title文字の大きさ
 * @default 72
 *
 */

var parameters = PluginManager.parameters('TitleOptions');

function getStringParam(key) {
    return String(parameters[key])
}

function getNumberParam(key) {
    return Number(parameters[key])
}

(function () {
    var titleColor = getStringParam("TitleColor");
    var fontSize = getNumberParam("FontSize");

    Scene_Title.prototype.drawGameTitle = function () {
        var x = 20;
        var y = Graphics.height / 4;
        var maxWidth = Graphics.width - x * 2;
        var text = $dataSystem.gameTitle;
        this._gameTitleSprite.bitmap.outlineColor = titleColor;
        this._gameTitleSprite.bitmap.outlineWidth = 8;
        this._gameTitleSprite.bitmap.fontSize = fontSize;
        this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'center');
    }
})();