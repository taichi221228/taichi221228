/** @package */
export const contents = [
	{
		art: `
                       _oo0oo_
                      o8888888o
                      88" . "88
                      (| -_- |)
                      0\\  =  /0
                    ___/'---'\\___
                  .' \\\\|     |// '.
                 / \\\\|||  :  |||// \\
                / _||||| -:- |||||_ \\
               |   | \\\\\\  -  /// |   |
               | \\_|  ''\\---/''  |_/ |
               \\  .-\\__  '-'  ___/-. /
             ___'. .'  /--.--\\  '. .'___
          ."" '<  '.___\\_<|>_/___.' >' "".
         | | :  '- \\'.:'\\ _ /':.'/ - ' : | |
         \\  \\ '-.   \\_ __\\ /__ _/   .-' /  /
     ====='-.____'.___ \\_____/___.-'___.-'=====
                       '=---='


     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

               佛祖保佑         永無 BUG
`,
		text: `
           佛曰

               書斎内書房間、書房間内程序士
               程序士書程序、亦以程序換酒銭
              酒醒唯在網上坐、酒醉還来網下眠
              酒醉酒醒日復日、網上網下年復年
              但願老死電算間、不願鞠躬老闆前
              奔馳寶馬貴者趣、公共自行程序士
              他人笑我過狂癲、我笑自己命過賤
              不見滿街佳麗妹、何人歸得程序士
`,
		styles: ["color: gold;", "text-shadow: 0 0 3px gold;"],
	},
] as const satisfies {
	art: string;
	text: string;
	styles: string[];
}[];