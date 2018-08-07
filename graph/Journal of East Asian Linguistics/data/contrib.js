var nodes = [
{name: 0, category: '2013', value: 0.333333, label: 'Adjectives Nominalization', special: 1},
{name: 1, category: '2013', value: 0.333333, label: 'Akiko Takemura', special: 1},
{name: 2, category: '2010', value: 0.666667, label: 'Akira Watanabe', special: 1},
{name: 3, category: '2013', value: 0.666667, label: 'Akira Watanabe', special: 1},
{name: 4, category: '2010', value: 1, label: 'Alexander Grosu', special: 1},
{name: 5, category: '2012', value: 0.666667, label: 'Alexander Grosu', special: 1},
{name: 6, category: '2011', value: 0.666667, label: 'Alexander Vovin', special: 1},
{name: 7, category: '2010', value: 0.25, label: 'Analogy', special: 1},
{name: 8, category: '2017', value: 0.666667, label: 'Andrew Murphy', special: 1},
{name: 9, category: '2017', value: 0.333333, label: 'B Andrew Murphy andrew.murphy@uni-leipzig.de', special: 1},
{name: 10, category: '2017', value: 0.333333, label: 'B Jungmee Lee jungmeelee@skku.edu', special: 1},
{name: 11, category: '2010', value: 1, label: 'Barbara Meisterernst', special: 1},
{name: 12, category: '2016', value: 1, label: 'Barbara Meisterernst', special: 1},
{name: 13, category: '2012', value: 1, label: 'Barry Chung-Yu Yang', special: 1},
{name: 14, category: '2009', value: 0.333333, label: 'Binding', special: 1},
{name: 15, category: '2016', value: 1, label: 'Brent de Chene', special: 1},
{name: 16, category: '2014', value: 0.166667, label: 'Brian Dillon', special: 1},
{name: 17, category: '2016', value: 0.166667, label: 'C.-T. James Huang', special: 1},
{name: 18, category: '2016', value: 0.111111, label: 'C.-T. James Huang ctjhuang@fas.harvard.edu', special: 1},
{name: 19, category: '2014', value: 0.490476, label: 'Candice Chi-Hang Cheung', special: 1},
{name: 20, category: '2015', value: 0.333333, label: 'Candice Chi-Hang Cheung', special: 1},
{name: 21, category: '2008', value: 0.333333, label: 'Chaak-ming Lau', special: 1},
{name: 22, category: '2016', value: 0.666667, label: 'Changguk Yim', special: 1},
{name: 23, category: '2010', value: 1, label: 'Chen-Sheng Luther Liu', special: 1},
{name: 24, category: '2013', value: 1, label: 'Chen-Sheng Luther Liu', special: 1},
{name: 25, category: '2008', value: 0.2, label: 'Chiyuki Ito', special: 1},
{name: 26, category: '2010', value: 0.55, label: 'Chiyuki Ito', special: 1},
{name: 27, category: '2012', value: 0.333333, label: 'Chris Kennedy', special: 1},
{name: 28, category: '2009', value: 1, label: 'Chun-Chieh Natalie Hsu', special: 1},
{name: 29, category: '2010', value: 0.333333, label: 'Contour Tone Unit', special: 1},
{name: 30, category: '2016', value: 0.142857, label: 'Control', special: 1},
{name: 31, category: '2017', value: 1, label: 'Daniel Hole', special: 1},
{name: 32, category: '2013', value: 1, label: 'David R. Mortensen', special: 1},
{name: 33, category: '2011', value: 1, label: 'David Y. Oshima', special: 1},
{name: 34, category: '2014', value: 1, label: 'David Y. Oshima', special: 1},
{name: 35, category: '2009', value: 0.166667, label: 'Demonstrative', special: 1},
{name: 36, category: '2017', value: 0.2, label: 'Dingxu Shi', special: 1},
{name: 37, category: '2009', value: 0.2, label: 'Discourse', special: 1},
{name: 38, category: '2011', value: 0.333333, label: 'Ditransitives Idiomaticity', special: 1},
{name: 39, category: '2009', value: 0.666667, label: 'Dong-Bo Hsu', special: 1},
{name: 40, category: '2014', value: 1, label: 'Duk-Ho An', special: 1},
{name: 41, category: '2016', value: 1, label: 'Duk-Ho An', special: 1},
{name: 42, category: '2010', value: 1, label: 'Edith Aldridge', special: 1},
{name: 43, category: '2009', value: 1, label: 'Eun-Ju Noh', special: 1},
{name: 44, category: '2008', value: 1, label: 'EunHee Lee', special: 1},
{name: 45, category: '2016', value: 0.666667, label: 'EunHee Lee', special: 1},
{name: 46, category: '2008', value: 0.55, label: 'Feng-fan Hsieh', special: 1},
{name: 47, category: '2014', value: 0.125, label: 'Fengqin Liu', special: 1},
{name: 48, category: '2014', value: 0.142857, label: 'Focus', special: 1},
{name: 49, category: '2010', value: 1, label: 'Francesca Del Gobbo', special: 1},
{name: 50, category: '2012', value: 0.333333, label: 'Fred Landman', special: 1},
{name: 51, category: '2010', value: 0.2, label: 'Frequency', special: 1},
{name: 52, category: '2009', value: 0.490476, label: 'H. Liu', special: 1},
{name: 53, category: '2013', value: 0.25, label: 'Hajime Takeyasu', special: 1},
{name: 54, category: '2010', value: 1, label: 'Hanjung Lee', special: 1},
{name: 55, category: '2015', value: 0.666667, label: 'Haoze Li', special: 1},
{name: 56, category: '2013', value: 0.55, label: 'Haruo Kubozono', special: 1},
{name: 57, category: '2008', value: 1, label: 'Hideki Kishimoto', special: 1},
{name: 58, category: '2012', value: 1, label: 'Hideki Kishimoto', special: 1},
{name: 59, category: '2017', value: 1, label: 'Hideki Kishimoto', special: 1},
{name: 60, category: '2011', value: 1, label: 'Hilary Chappell Alain Peyraube Yunji Wu', special: 1},
{name: 61, category: '2013', value: 0.166667, label: 'Hiroaki Kato', special: 1},
{name: 62, category: '2011', value: 0.333333, label: 'Hiroki Nomoto', special: 1},
{name: 63, category: '2010', value: 0.333333, label: 'Hiroyuki Ura', special: 1},
{name: 64, category: '2011', value: 0.666667, label: 'Hooi Ling Soh', special: 1},
{name: 65, category: '2010', value: 0.333333, label: 'Howard Lasnik', special: 1},
{name: 66, category: '2012', value: 1, label: 'Hui-chi Lee', special: 1},
{name: 67, category: '2008', value: 1, label: 'Hui-shan Lin', special: 1},
{name: 68, category: '2008', value: 1, label: 'Hyang-Sook Sohn', special: 1},
{name: 69, category: '2014', value: 0.666667, label: 'Hyunjung Lee', special: 1},
{name: 70, category: '2008', value: 1, label: 'Hyunsoon Kim', special: 1},
{name: 71, category: '2014', value: 0.2, label: 'Identificational Focus', special: 1},
{name: 72, category: '2013', value: 0.666667, label: 'Itsue Kawagoe', special: 1},
{name: 73, category: '2009', value: 0.666667, label: 'J.-R. Hayashishita', special: 1},
{name: 74, category: '2017', value: 1, label: 'J.-R. Hayashishita', special: 1},
{name: 75, category: '2012', value: 1, label: 'J.-S. Wu', special: 1},
{name: 76, category: '2009', value: 0.333333, label: 'Japanese', special: 1},
{name: 77, category: '2010', value: 0.333333, label: 'Japanese', special: 1},
{name: 78, category: '2011', value: 0.2, label: 'Japanese', special: 1},
{name: 79, category: '2014', value: 0.333333, label: 'Jenn-Yeu Chen', special: 1},
{name: 80, category: '2009', value: 0.666667, label: 'Jenny Yi-chun Kuo', special: 1},
{name: 81, category: '2016', value: 0.333333, label: 'Jiang Liu', special: 1},
{name: 82, category: '2014', value: 0.333333, label: 'Jie Zhang', special: 1},
{name: 83, category: '2016', value: 0.666667, label: 'Jie Zhang', special: 1},
{name: 84, category: '2009', value: 0.142857, label: 'Jingpo', special: 1},
{name: 85, category: '2008', value: 1, label: 'Jiun-Shiung Wu', special: 1},
{name: 86, category: '2009', value: 0.55, label: 'Jiun-Shiung Wu', special: 1},
{name: 87, category: '2015', value: 0.454365, label: 'Jiwon Yun', special: 1},
{name: 88, category: '2015', value: 0.111111, label: 'John Hale', special: 1},
{name: 89, category: '2009', value: 0.333333, label: 'John Whitman', special: 1},
{name: 90, category: '2015', value: 0.125, label: 'John Whitman', special: 1},
{name: 91, category: '2010', value: 1, label: 'Jongho Jun', special: 1},
{name: 92, category: '2011', value: 1, label: 'Jun Abe', special: 1},
{name: 93, category: '2017', value: 0.666667, label: 'Jungmee Lee', special: 1},
{name: 94, category: '2014', value: 1, label: 'Junko Shimoyama', special: 1},
{name: 95, category: '2008', value: 0.666667, label: 'Kang-kwong Luke', special: 1},
{name: 96, category: '2013', value: 0.333333, label: 'Kay-Eduardo González-Vilbazo', special: 1},
{name: 97, category: '2013', value: 0.142857, label: 'Keiichi Tajima', special: 1},
{name: 98, category: '2008', value: 0.2, label: 'Keiko Murasugi', special: 1},
{name: 99, category: '2016', value: 1, label: 'Kenshi Funakoshi', special: 1},
{name: 100, category: '2009', value: 1, label: 'Kensuke Takita', special: 1},
{name: 101, category: '2012', value: 1, label: 'Kilu von Prince', special: 1},
{name: 102, category: '2012', value: 0.666667, label: 'Kuo-Chan Sun', special: 1},
{name: 103, category: '2017', value: 0.25, label: 'Lan Kim', special: 1},
{name: 104, category: '2013', value: 0.666667, label: 'Laura Bartlett', special: 1},
{name: 105, category: '2014', value: 1, label: 'Laurence Labrune', special: 1},
{name: 106, category: '2017', value: 1, label: 'Laurence Labrune', special: 1},
{name: 107, category: '2015', value: 1, label: 'Lawrence Y.-L. Cheung', special: 1},
{name: 108, category: '2009', value: 2, label: 'Lawrence Yam-Leung Cheung', special: 1},
{name: 109, category: '2015', value: 0.55, label: 'Linda Badan', special: 1},
{name: 110, category: '2015', value: 0.2, label: 'Linda Badan linda.badan@gmail.com', special: 1},
{name: 111, category: '2013', value: 0.666667, label: 'Lisa Lai-Shen Cheng', special: 1},
{name: 112, category: '2015', value: 0.25, label: 'Lisa Lai-Shen Cheng', special: 1},
{name: 113, category: '2014', value: 0.142857, label: 'Logic', special: 1},
{name: 114, category: '2013', value: 0.333333, label: 'Luis Vicente', special: 1},
{name: 115, category: '2012', value: 0.666667, label: 'Maki Kishida', special: 1},
{name: 116, category: '2008', value: 0.55, label: 'Mamoru Saito', special: 1},
{name: 117, category: '2009', value: 0.333333, label: 'Maria D. Sera', special: 1},
{name: 118, category: '2009', value: 0.666667, label: 'Mark Irwin', special: 1},
{name: 119, category: '2010', value: 1, label: 'Masahiko Takahashi', special: 1},
{name: 120, category: '2014', value: 0.142857, label: 'Matt Wagers', special: 1},
{name: 121, category: '2013', value: 0.454365, label: 'Mee Sonu', special: 1},
{name: 122, category: '2017', value: 0.25, label: 'Miao-Ling Hsieh', special: 1},
{name: 123, category: '2008', value: 0.25, label: 'Michael J. Kenstowicz', special: 1},
{name: 124, category: '2008', value: 0.25, label: 'Michael Kenstowicz', special: 1},
{name: 125, category: '2017', value: 2, label: 'Michael Yoshitaka Erlewine', special: 1},
{name: 126, category: '2013', value: 0.2, label: 'Mikio Giriko', special: 1},
{name: 127, category: '2008', value: 1, label: 'Ming Xiang', special: 1},
{name: 128, category: '2014', value: 0.454365, label: 'Ming Xiang', special: 1},
{name: 129, category: '2012', value: 1, label: 'Mira Oh', special: 1},
{name: 130, category: '2011', value: 0.25, label: 'Misa Miyachi', special: 1},
{name: 131, category: '2016', value: 0.333333, label: 'Mitsuaki Shimojo', special: 1},
{name: 132, category: '2009', value: 0.333333, label: 'Mora Japanese', special: 1},
{name: 133, category: '2016', value: 0.454365, label: 'Na Liu', special: 1},
{name: 134, category: '2017', value: 1, label: 'Nigel Duffield', special: 1},
{name: 135, category: '2016', value: 1, label: 'Niina Ning Zhang', special: 1},
{name: 136, category: '2009', value: 0.333333, label: 'Old Chinese', special: 1},
{name: 137, category: '2013', value: 1, label: 'Osamu Sawada', special: 1},
{name: 138, category: '2014', value: 1, label: 'Paul Law', special: 1},
{name: 139, category: '2010', value: 1, label: 'Peggy Li Becky Huang Yaling Hsiao', special: 1},
{name: 140, category: '2014', value: 0.490476, label: 'Peng Zhou', special: 1},
{name: 141, category: '2017', value: 0.55, label: 'Qiongpeng Luo', special: 1},
{name: 142, category: '2016', value: 0.125, label: 'Raising', special: 1},
{name: 143, category: '2013', value: 0.125, label: 'Reiko Akahane-Yamada', special: 1},
{name: 144, category: '2014', value: 0.166667, label: 'Rosalind Thornton', special: 1},
{name: 145, category: '2009', value: 1, label: 'S. Tomioka', special: 1},
{name: 146, category: '2012', value: 1, label: 'San Duanmu', special: 1},
{name: 147, category: '2017', value: 0.55, label: 'Satoshi Tomioka', special: 1},
{name: 148, category: '2017', value: 0.2, label: 'Satoshi Tomioka stomioka@udel.edu', special: 1},
{name: 149, category: '2008', value: 1, label: 'Shiao Wei Tham', special: 1},
{name: 150, category: '2015', value: 1, label: 'Shigeko Shinohara', special: 1},
{name: 151, category: '2008', value: 1, label: 'Shigeto Kawahara', special: 1},
{name: 152, category: '2011', value: 1, label: 'Shigeto Kawahara', special: 1},
{name: 153, category: '2010', value: 0.666667, label: 'Shin\'ya Asano', special: 1},
{name: 154, category: '2014', value: 0.666667, label: 'Shuping Huang', special: 1},
{name: 155, category: '2011', value: 0.55, label: 'Stefan Kaufmann', special: 1},
{name: 156, category: '2014', value: 0.2, label: 'Stephen Crain', special: 1},
{name: 157, category: '2010', value: 0.666667, label: 'Sungshim Hong', special: 1},
{name: 158, category: '2013', value: 1, label: 'Suwon Yoon', special: 1},
{name: 159, category: '2011', value: 1, label: 'Suying Yang', special: 1},
{name: 160, category: '2011', value: 1, label: 'Sze-Wing Tang', special: 1},
{name: 161, category: '2008', value: 0.25, label: 'T.-H. Jonah Lin', special: 1},
{name: 162, category: '2014', value: 1, label: 'Taisuke Nishigauchi', special: 0},
{name: 163, category: '2011', value: 0.666667, label: 'Takae Tsujioka', special: 1},
{name: 164, category: '2015', value: 0.333333, label: 'Takenobu Fukushima', special: 1},
{name: 165, category: '2014', value: 0.111111, label: 'Taomei Guo', special: 0},
{name: 166, category: '2009', value: 0.25, label: 'Tense Semantics', special: 0},
{name: 167, category: '2012', value: 0.666667, label: 'Thomas Grano', special: 1},
{name: 168, category: '2017', value: 1, label: 'Thomas Grano', special: 1},
{name: 169, category: '2016', value: 1, label: 'Thomas Pellard', special: 1},
{name: 170, category: '2015', value: 0.142857, label: 'Tim Hunter', special: 1},
{name: 171, category: '2011', value: 1, label: 'Ting-Chi Wei', special: 1},
{name: 172, category: '2016', value: 0.666667, label: 'Ting-Chi Wei', special: 1},
{name: 173, category: '2008', value: 0.2, label: 'Tones', special: 1},
{name: 174, category: '2014', value: 0.166667, label: 'Topic', special: 0},
{name: 175, category: '2008', value: 1, label: 'Toshio Matsuura', special: 1},
{name: 176, category: '2015', value: 0.666667, label: 'Toshiyuki Ogihara', special: 1},
{name: 177, category: '2012', value: 0.333333, label: 'Tsan Huang', special: 1},
{name: 178, category: '2010', value: 0.666667, label: 'Tsung-Ying Chen', special: 1},
{name: 179, category: '2017', value: 1, label: 'Tue Trinh', special: 1},
{name: 180, category: '2009', value: 0.666667, label: 'Tzong-Hong Jonah Lin', special: 1},
{name: 181, category: '2015', value: 1.66667, label: 'Tzong-Hong Jonah Lin', special: 1},
{name: 182, category: '2008', value: 1, label: 'Wei-Tien Dylan Tsai', special: 0},
{name: 183, category: '2011', value: 0.666667, label: 'Wei-wen Roger Liao', special: 1},
{name: 184, category: '2015', value: 1, label: 'Wei-wen Roger Liao', special: 1},
{name: 185, category: '2011', value: 0.333333, label: 'Western Old Japanese Monophthongization', special: 1},
{name: 186, category: '2009', value: 0.2, label: 'Y. Gu', special: 0},
{name: 187, category: '2015', value: 1, label: 'Yasutada Sudo', special: 1},
{name: 188, category: '2015', value: 1, label: 'Ye Yuan', special: 1},
{name: 189, category: '2008', value: 1, label: 'Yen-Hwei Lin', special: 0},
{name: 190, category: '2016', value: 0.333333, label: 'Yen-hui Audrey Li', special: 1},
{name: 191, category: '2013', value: 1, label: 'Yi Esther Su', special: 1},
{name: 192, category: '2009', value: 1, label: 'Yoichi Miyamoto', special: 0},
{name: 193, category: '2008', value: 0.55, label: 'Yoonjung Kang', special: 0},
{name: 194, category: '2013', value: 1, label: 'Yoonjung Kang', special: 0},
{name: 195, category: '2016', value: 0.333333, label: 'Yoshihito Dobashi', special: 1},
{name: 196, category: '2013', value: 0.111111, label: 'Yoshinori Sagisaka', special: 0},
{name: 197, category: '2015', value: 1, label: 'Yoshiyuki Shibata', special: 1},
{name: 198, category: '2011', value: 1, label: 'Yosuke Sato', special: 1},
{name: 199, category: '2012', value: 0.333333, label: 'Yosuke Sato', special: 1},
{name: 200, category: '2014', value: 1, label: 'Yu-An Lu', special: 0},
{name: 201, category: '2015', value: 0.333333, label: 'Yu-Shan Huang', special: 1},
{name: 202, category: '2011', value: 1, label: 'Yuji Takano', special: 1},
{name: 203, category: '2009', value: 0.666667, label: 'Yuko Yanagida', special: 0},
{name: 204, category: '2016', value: 1, label: 'Yuta Sakamoto', special: 1},
{name: 205, category: '2011', value: 0.333333, label: 'Yuyun Iris Wang', special: 1},
{name: 206, category: '2012', value: 1, label: 'Zhiguo Xie', special: 1},
{name: 207, category: '2014', value: 1, label: 'Zhiguo Xie', special: 1},
{name: 208, category: '2015', value: 0.166667, label: 'Zhong Chen', special: 1},
];