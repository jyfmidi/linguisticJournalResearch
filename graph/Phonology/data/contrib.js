var nodes = [
{name: 0, category: '2008', value: 0.0217391, label: ') by Jun as editor', special: 0},
{name: 1, category: '2009', value: 0.0277778, label: ') head-dependent asymmetry theory', special: 0},
{name: 2, category: '2009', value: 0.0384615, label: ') within the framework of Optimality Theory (OT', special: 1},
{name: 3, category: '2008', value: 0.2, label: '). Cambridge :', special: 1},
{name: 4, category: '2009', value: 0.0344828, label: '). Importantly', special: 1},
{name: 5, category: '2012', value: 0.2, label: '). Patterns in child phonology.', special: 1},
{name: 6, category: '2017', value: 0.2, label: '.) Oxford: Oxford', special: 1},
{name: 7, category: '2011', value: 1, label: 'Aaron Kaplan', special: 1},
{name: 8, category: '2016', value: 1, label: 'Aaron Kaplan', special: 1},
{name: 9, category: '2009', value: 1, label: 'Adam Albright', special: 1},
{name: 10, category: '2016', value: 1, label: 'Adam Jardine', special: 1},
{name: 11, category: '2011', value: 0.2, label: 'Adamantios I. Gafos', special: 1},
{name: 12, category: '2011', value: 1, label: 'Alan C. L. Yu', special: 1},
{name: 13, category: '2017', value: 1, label: 'Aleksei Nazarov', special: 1},
{name: 14, category: '2008', value: 0.0185185, label: 'Amalia Arvaniti', special: 1},
{name: 15, category: '2009', value: 1, label: 'Amalia Arvaniti', special: 1},
{name: 16, category: '2017', value: 1, label: 'Amanda Ritchart Sharon Rose', special: 1},
{name: 17, category: '2011', value: 0.333333, label: 'Amsterdam', special: 1},
{name: 18, category: '2017', value: 1, label: 'Andreas Baumann', special: 1},
{name: 19, category: '2009', value: 2, label: 'Andries W. Coetzee', special: 1},
{name: 20, category: '2016', value: 1, label: 'Andries W. Coetzee', special: 1},
{name: 21, category: '2010', value: 1, label: 'Angela C. Carpenter', special: 1},
{name: 22, category: '2013', value: 1, label: 'Anne Hermes Doris Mu¨ cke Martine Grice', special: 1},
{name: 23, category: '2010', value: 1, label: 'Anne Pycha', special: 1},
{name: 24, category: '2014', value: 1, label: 'Anne-Michelle Tessier', special: 1},
{name: 25, category: '2017', value: 0.666667, label: 'Anya Lunden', special: 1},
{name: 26, category: '2008', value: 0.666667, label: 'Arto Anttila Vivienne Fong Stanford University', special: 1},
{name: 27, category: '2010', value: 1, label: 'Benjamin V. Tucker', special: 1},
{name: 28, category: '2012', value: 0.666667, label: 'Berit Anne Bals Baal University of Troms¿', special: 1},
{name: 29, category: '2012', value: 0.333333, label: 'Berlin', special: 1},
{name: 30, category: '2015', value: 0.666667, label: 'Berlin', special: 1},
{name: 31, category: '2014', value: 1, label: 'Bert Botma', special: 1},
{name: 32, category: '2014', value: 1, label: 'Bert Remijsen Otto Gwado Ayoker', special: 1},
{name: 33, category: '2016', value: 1, label: 'Björn Köhnlein', special: 1},
{name: 34, category: '2012', value: 1, label: 'Brett Hyde', special: 1},
{name: 35, category: '2016', value: 0.55, label: 'Brian Agbayani', special: 1},
{name: 36, category: '2009', value: 0.55, label: 'Bruce Hayes', special: 1},
{name: 37, category: '2011', value: 1, label: 'Bruce Hayes', special: 1},
{name: 38, category: '2015', value: 1, label: 'Bruce Hayes', special: 1},
{name: 39, category: '2008', value: 0.333333, label: 'CNRS)', special: 1},
{name: 40, category: '2015', value: 0.333333, label: 'CRISPEDGE constraint.', special: 1},
{name: 41, category: '2016', value: 0.25, label: 'California State University', special: 1},
{name: 42, category: '2012', value: 1, label: 'Carlos Gussenhoven', special: 1},
{name: 43, category: '2008', value: 0.0178571, label: 'Carlos Gussenhoven on Dutch (Ch.', special: 1},
{name: 44, category: '2015', value: 1, label: 'Caroline Féry', special: 1},
{name: 45, category: '2009', value: 0.111111, label: 'Chakir Zeroual Faculte´ Polydisciplinaire de Taza', special: 1},
{name: 46, category: '2017', value: 1, label: 'Charlie O\'Hara', special: 1},
{name: 47, category: '2008', value: 0.25, label: 'Cheryl Zoll (', special: 1},
{name: 48, category: '2008', value: 0.016129, label: 'Chiu-yu Tseng', special: 1},
{name: 49, category: '2014', value: 1, label: 'Chiyuki Ito', special: 1},
{name: 50, category: '2010', value: 0.666667, label: 'Christopher Potts Stanford University', special: 1},
{name: 51, category: '2008', value: 0.0133333, label: 'Cinzia Avesani on Italian (Ch.', special: 1},
{name: 52, category: '2016', value: 1, label: 'Clàudia Pons-Moll', special: 1},
{name: 53, category: '2012', value: 0.333333, label: 'Curt Rice', special: 1},
{name: 54, category: '2015', value: 1, label: 'D. Robert Ladd', special: 1},
{name: 55, category: '2011', value: 1, label: 'Daniel Currie Hall', special: 1},
{name: 56, category: '2013', value: 1, label: 'Daniel Currie Hall', special: 1},
{name: 57, category: '2012', value: 1, label: 'Darrell Larsen Jeffrey Heinz', special: 1},
{name: 58, category: '2010', value: 1, label: 'Darya Kavitskaya', special: 1},
{name: 59, category: '2009', value: 0.2, label: 'Donca Steriade (eds.) (', special: 1},
{name: 60, category: '2008', value: 0.666667, label: 'EHESS', special: 1},
{name: 61, category: '2017', value: 1, label: 'Edward Flemming', special: 1},
{name: 62, category: '2015', value: 0.666667, label: 'Elisabeth Selkirk', special: 1},
{name: 63, category: '2013', value: 0.166667, label: 'Ellen van Zanten (eds.) (', special: 1},
{name: 64, category: '2008', value: 1, label: 'Elliott Moreton', special: 1},
{name: 65, category: '2012', value: 1, label: 'Emanuela Buizza Leendert Plug', special: 1},
{name: 66, category: '2017', value: 1, label: 'Eric Bakovi©', special: 1},
{name: 67, category: '2008', value: 0.012987, label: 'Esther Grabe', special: 1},
{name: 68, category: '2009', value: 1, label: 'Eugene Buckley', special: 1},
{name: 69, category: '2013', value: 1, label: 'Eula` lia Bonet', special: 1},
{name: 70, category: '2013', value: 1, label: 'Eva Zimmermann', special: 1},
{name: 71, category: '2010', value: 1, label: 'Ewan Dunbar William J. Idsardi', special: 1},
{name: 72, category: '2014', value: 1, label: 'Florian Breit John Harris', special: 1},
{name: 73, category: '2017', value: 1, label: 'Florian Lionnet', special: 1},
{name: 74, category: '2016', value: 1, label: 'Francesc Torres-Tamarit', special: 1},
{name: 75, category: '2015', value: 0.666667, label: 'Frank Kügler', special: 1},
{name: 76, category: '2016', value: 0.2, label: 'Fresno', special: 1},
{name: 77, category: '2008', value: 0.0126582, label: 'G o¨sta Bruce on Swedish (Ch.', special: 1},
{name: 78, category: '2011', value: 1, label: 'G. L. Piggott', special: 1},
{name: 79, category: '2013', value: 1, label: 'Gaja Jarosz', special: 1},
{name: 80, category: '2017', value: 1, label: 'Gaja Jarosz', special: 1},
{name: 81, category: '2010', value: 1, label: 'Gillian Gallagher', special: 1},
{name: 82, category: '2013', value: 1, label: 'Gillian Gallagher', special: 1},
{name: 83, category: '2012', value: 1, label: 'Giorgio Magri', special: 1},
{name: 84, category: '2014', value: 1, label: 'Giorgio Magri', special: 1},
{name: 85, category: '2015', value: 1, label: 'Gorka Elordieta', special: 1},
{name: 86, category: '2017', value: 1, label: 'Guilherme D. Garcia', special: 1},
{name: 87, category: '2011', value: 1, label: 'Gunnar O´ lafur Hansson', special: 1},
{name: 88, category: '2013', value: 0.490476, label: 'Harry van der Hulst', special: 1},
{name: 89, category: '2009', value: 0.430123, label: 'Haskins Laboratories', special: 1},
{name: 90, category: '2017', value: 0.25, label: 'Historic Linguistics', special: 1},
{name: 91, category: '2011', value: 1, label: 'Hyesun Cho', special: 1},
{name: 92, category: '2016', value: 0.55, label: 'Hyunjung Lee Kyungnam University', special: 1},
{name: 93, category: '2009', value: 1, label: 'Iris Berent Tracy Lennertz', special: 1},
{name: 94, category: '2008', value: 0.0131579, label: 'Janet Fletcher', special: 1},
{name: 95, category: '2008', value: 0.0140845, label: 'Janet Fletcher on Bininj Gun-Wok (Ch.', special: 1},
{name: 96, category: '2011', value: 0.490476, label: 'Jason A. Shaw', special: 1},
{name: 97, category: '2016', value: 1, label: 'Jason Brown', special: 1},
{name: 98, category: '2009', value: 1, label: 'Jeffrey Heinz', special: 1},
{name: 99, category: '2017', value: 1, label: 'Jeffrey Heinz', special: 1},
{name: 100, category: '2008', value: 0.0172414, label: 'Jennifer J. Venditti on Japanese (Ch.', special: 1},
{name: 101, category: '2010', value: 1, label: 'Jennifer L. Smith', special: 1},
{name: 102, category: '2008', value: 0.333333, label: 'Jennifer Nycz', special: 1},
{name: 103, category: '2014', value: 1, label: 'Jennifer Wilson', special: 1},
{name: 104, category: '2008', value: 1, label: 'Jerzy Rubach', special: 1},
{name: 105, category: '2010', value: 1, label: 'Jie Zhang', special: 1},
{name: 106, category: '2016', value: 0.2, label: 'Jie Zhang', special: 1},
{name: 107, category: '2014', value: 1, label: 'Jochen Trommer Eva Zimmermann', special: 1},
{name: 108, category: '2008', value: 1, label: 'John A. Goldsmith', special: 1},
{name: 109, category: '2009', value: 1, label: 'John Alderete', special: 1},
{name: 110, category: '2016', value: 0.666667, label: 'John Coleman University of Oxford', special: 1},
{name: 111, category: '2008', value: 1, label: 'John J. McCarthy', special: 1},
{name: 112, category: '2016', value: 1, label: 'Jonah Katz', special: 1},
{name: 113, category: '2017', value: 0.666667, label: 'Jonathan Keane University of Chicago', special: 1},
{name: 114, category: '2015', value: 1, label: 'Jongho Jun', special: 1},
{name: 115, category: '2008', value: 0.0142857, label: 'Judith Bishop', special: 0},
{name: 116, category: '2008', value: 0.0204082, label: 'Julia Hirschberg', special: 0},
{name: 117, category: '2014', value: 1, label: 'Julian Bradfield', special: 1},
{name: 118, category: '2017', value: 1, label: 'Julian Bradfield', special: 1},
{name: 119, category: '2016', value: 1, label: 'Juliet Stanton', special: 1},
{name: 120, category: '2010', value: 1, label: 'Juliette Blevins', special: 1},
{name: 121, category: '2017', value: 0.666667, label: 'Juliette Blevins', special: 1},
{name: 122, category: '2008', value: 0.0169492, label: 'Jun herself on Korean (Ch.', special: 0},
{name: 123, category: '2015', value: 1, label: 'Karthik Durvasula', special: 1},
{name: 124, category: '2015', value: 1, label: 'Kathleen M. O\'Connor Cédric Patin', special: 1},
{name: 125, category: '2009', value: 1, label: 'Kathryn Flack', special: 1},
{name: 126, category: '2010', value: 1, label: 'Kathryn Pruitt', special: 1},
{name: 127, category: '2009', value: 1, label: 'Kazutaka Kurisu', special: 1},
{name: 128, category: '2008', value: 1, label: 'Keren Rice', special: 0},
{name: 129, category: '2011', value: 1, label: 'Kevin M. Ryan', special: 1},
{name: 130, category: '2017', value: 1, label: 'Kevin M. Ryan', special: 1},
{name: 131, category: '2014', value: 1, label: 'Kie Zuraw', special: 1},
{name: 132, category: '2015', value: 0.333333, label: 'Kriszta Szendr`i', special: 1},
{name: 133, category: '2009', value: 0.0909091, label: 'Laboratoire de', special: 1},
{name: 134, category: '2016', value: 1, label: 'Labrune', special: 1},
{name: 135, category: '2011', value: 1, label: 'Larry M. Hyman', special: 1},
{name: 136, category: '2015', value: 1, label: 'Larry M. Hyman', special: 1},
{name: 137, category: '2009', value: 1, label: 'Laura C. Dilley', special: 1},
{name: 138, category: '2016', value: 1, label: 'Laura McPherson', special: 1},
{name: 139, category: '2008', value: 1, label: 'La´ szlo´ Varga', special: 0},
{name: 140, category: '2011', value: 1, label: 'Leendert Plug', special: 1},
{name: 141, category: '2017', value: 0.333333, label: 'Ludwig Maximilians University, Munich', special: 1},
{name: 142, category: '2012', value: 1, label: 'Luiza Newlin-Kukowicz', special: 1},
{name: 143, category: '2017', value: 1, label: 'Mans Hulden', special: 1},
{name: 144, category: '2008', value: 0.0136986, label: 'Mar- iapaola D\'Imperio', special: 0},
{name: 145, category: '2015', value: 1, label: 'Marc van Oostendorp', special: 1},
{name: 146, category: '2016', value: 0.333333, label: 'Margaret E. L. Renwick', special: 1},
{name: 147, category: '2010', value: 1, label: 'Maria Giavazzi', special: 1},
{name: 148, category: '2013', value: 0.2, label: 'Maria Gouskova', special: 1},
{name: 149, category: '2008', value: 1, label: 'Marianne Pouplier', special: 0},
{name: 150, category: '2014', value: 1, label: 'Mariapaola D\'Imperio', special: 1},
{name: 151, category: '2009', value: 1, label: 'Mariko Sugahara', special: 1},
{name: 152, category: '2008', value: 0.0313188, label: 'Marjorie K. M. Chan', special: 1},
{name: 153, category: '2017', value: 0.333333, label: 'Mark Hutchens', special: 1},
{name: 154, category: '2011', value: 1, label: 'Markus A. Po¨ chtrager', special: 1},
{name: 155, category: '2008', value: 0.0138889, label: 'Martine Grice', special: 0},
{name: 156, category: '2008', value: 0.0181818, label: 'Mary Baltazani on Greek (Ch.', special: 0},
{name: 157, category: '2008', value: 0.0147059, label: 'Mary E. Beckman on Cantonese (Ch.', special: 0},
{name: 158, category: '2008', value: 0.0153846, label: 'Mary E. Beckman on Mandarin (Ch.', special: 0},
{name: 159, category: '2009', value: 1, label: 'Matthew Goldrick Robert Daland', special: 1},
{name: 160, category: '2010', value: 1, label: 'Matthew Gordon Ayla Applebaum', special: 1},
{name: 161, category: '2008', value: 0.0144928, label: 'Matthew K. Gordon on Chickasaw (Ch.', special: 0},
{name: 162, category: '2011', value: 1, label: 'Matthew Wolf', special: 1},
{name: 163, category: '2011', value: 0.666667, label: 'Meertens Institute', special: 1},
{name: 164, category: '2014', value: 1, label: 'Megan J. Crowhurst', special: 1},
{name: 165, category: '2010', value: 0.333333, label: 'Michael Becker', special: 1},
{name: 166, category: '2011', value: 1, label: 'Michael Becker', special: 1},
{name: 167, category: '2008', value: 1, label: 'Michael C. Cahill SIL International', special: 0},
{name: 168, category: '2016', value: 1, label: 'Michael Hammond', special: 1},
{name: 169, category: '2009', value: 0.666667, label: 'Michael Jessen Bundeskriminalamt', special: 0},
{name: 170, category: '2017', value: 0.55, label: 'Michele Loporcaro (', special: 0},
{name: 171, category: '2008', value: 0.0135135, label: 'Michelina Savino', special: 0},
{name: 172, category: '2009', value: 0.1, label: 'Morocco', special: 0},
{name: 173, category: '2009', value: 0.125, label: 'Munich', special: 0},
{name: 174, category: '2015', value: 1, label: 'Nancy C. Kula', special: 1},
{name: 175, category: '2013', value: 0.142857, label: 'New York : de Gruyter Mouton. Pp. xiv', special: 1},
{name: 176, category: '2017', value: 1, label: 'Nina Topintzi', special: 0},
{name: 177, category: '2013', value: 1, label: 'Noam Faust', special: 1},
{name: 178, category: '2014', value: 1, label: 'Noam Faust', special: 1},
{name: 179, category: '2011', value: 0.166667, label: 'Nouvelle', special: 1},
{name: 180, category: '2008', value: 0.015625, label: 'Ok Joo Lee', special: 0},
{name: 181, category: '2014', value: 1, label: 'O¨ ner O¨ zc¸ elik', special: 1},
{name: 182, category: '2011', value: 0.142857, label: 'Paris)', special: 1},
{name: 183, category: '2008', value: 1, label: 'Paul Boersma', special: 0},
{name: 184, category: '2008', value: 0.0128205, label: 'Paul Warren on high rising tunes in English (Ch.', special: 0},
{name: 185, category: '2012', value: 0.25, label: 'Paula Reimers (', special: 1},
{name: 186, category: '2017', value: 1, label: 'Pavel Iosad', special: 0},
{name: 187, category: '2017', value: 1, label: 'Peter Ara Guekguezian', special: 0},
{name: 188, category: '2012', value: 1, label: 'Peter Jurgec', special: 1},
{name: 189, category: '2009', value: 0.142857, label: 'Philip Hoole Ludwig Maximilians University', special: 0},
{name: 190, category: '2009', value: 0.0787037, label: 'Prince', special: 1},
{name: 191, category: '2008', value: 1, label: 'Rachel Walker Dani Byrd', special: 0},
{name: 192, category: '2016', value: 1, label: 'Raechel Maskikit-Essed', special: 1},
{name: 193, category: '2008', value: 1, label: 'Rafael Nu´ n ez-Ceden o', special: 0},
{name: 194, category: '2008', value: 0.0188679, label: 'Ralf Benzmu¨ ller on German (Ch.', special: 0},
{name: 195, category: '2012', value: 1, label: 'Ranjan Sen', special: 1},
{name: 196, category: '2012', value: 1, label: 'Rene´ Kager', special: 1},
{name: 197, category: '2015', value: 0.333333, label: 'René Kager', special: 1},
{name: 198, category: '2012', value: 0.666667, label: 'Research Centre for General Linguistics (ZAS)', special: 1},
{name: 199, category: '2013', value: 0.2, label: 'Rob Goedemans', special: 1},
{name: 200, category: '2012', value: 1, label: 'Robert Blust', special: 1},
{name: 201, category: '2015', value: 1, label: 'Robert Daland', special: 1},
{name: 202, category: '2008', value: 1, label: 'Robert Kennedy', special: 0},
{name: 203, category: '2009', value: 0.25, label: 'Robert Kirchner', special: 0},
{name: 204, category: '2013', value: 1, label: 'Ryan Bennett', special: 1},
{name: 205, category: '2013', value: 1, label: 'Sara Mackenzie', special: 1},
{name: 206, category: '2013', value: 1, label: 'Sara Myrberg', special: 1},
{name: 207, category: '2014', value: 1, label: 'Scott Myers', special: 1},
{name: 208, category: '2015', value: 0.333333, label: 'Seunghun J. Lee', special: 1},
{name: 209, category: '2008', value: 0.55, label: 'Sharon Inkelas', special: 0},
{name: 210, category: '2008', value: 0.0166667, label: 'Shu-hui Peng', special: 0},
{name: 211, category: '2009', value: 0.0357143, label: 'Smolensky', special: 0},
{name: 212, category: '2010', value: 1, label: 'So-One K. Hwang', special: 1},
{name: 213, category: '2013', value: 0.25, label: 'Sofya Kasyanenko', special: 1},
{name: 214, category: '2008', value: 1, label: 'Sorbonne Nouvelle)', special: 1},
{name: 215, category: '2015', value: 1, label: 'Sorbonne Nouvelle)', special: 1},
{name: 216, category: '2013', value: 1, label: 'So´ nia Frota Marina Viga´ rio', special: 1},
{name: 217, category: '2008', value: 0.0192308, label: 'Stefan Baumann', special: 0},
{name: 218, category: '2008', value: 0.02, label: 'Stefanie Shattuck-Hufnagel', special: 0},
{name: 219, category: '2017', value: 1, label: 'Stephanie S. Shih', special: 0},
{name: 220, category: '2015', value: 1, label: 'Suzanne V. H. van der Feest', special: 1},
{name: 221, category: '2012', value: 1, label: 'Sverre Stausland Johnsen', special: 1},
{name: 222, category: '2014', value: 1, label: 'Sverre Stausland Johnsen', special: 1},
{name: 223, category: '2013', value: 0.666667, label: 'Svetlana Dachkovsky University of Haifa', special: 1},
{name: 224, category: '2008', value: 0.0175439, label: 'Svetlana Godjevac on Serbo-Croatian (Ch.', special: 0},
{name: 225, category: '2013', value: 0.55, label: 'Tal Linzen', special: 1},
{name: 226, category: '2011', value: 1, label: 'Tara McAllister Byun', special: 1},
{name: 227, category: '2017', value: 1, label: 'Thomas Graf', special: 0},
{name: 228, category: '2008', value: 0.0227273, label: 'Transcription \') held in conjunction with the', special: 0},
{name: 229, category: '2008', value: 0.015873, label: 'Tsan Huang', special: 0},
{name: 230, category: '2008', value: 1, label: 'Ulrike Domahs Richard Wiese', special: 0},
{name: 231, category: '2016', value: 0.25, label: 'University of Kansas', special: 0},
{name: 232, category: '2016', value: 1, label: 'Université Paris', special: 0},
{name: 233, category: '2009', value: 0.04, label: 'Urbanczyk', special: 0},
{name: 234, category: '2015', value: 0.666667, label: 'Violeta Martínez-Paricio', special: 0},
{name: 235, category: '2008', value: 0.0151515, label: 'Wai Yi P. Wong', special: 0},
{name: 236, category: '2013', value: 0.333333, label: 'Wendy Sandler', special: 1},
{name: 237, category: '2009', value: 0.333333, label: 'Wiesbaden', special: 0},
{name: 238, category: '2017', value: 1, label: 'Wm. G. Bennett', special: 0},
{name: 239, category: '2012', value: 0.55, label: 'Wyn Johnson', special: 1},
{name: 240, category: '2015', value: 1, label: 'Yi Xu', special: 0},
{name: 241, category: '2010', value: 1, label: 'Yoonjung Kang', special: 1},
{name: 242, category: '2011', value: 1, label: 'Yuni Kim', special: 0},
{name: 243, category: '2017', value: 0.333333, label: 'Zed Sevcikova Sehyr Karen Emmorey', special: 0},
{name: 244, category: '2008', value: 0.0238095, label: 'a decent index', special: 0},
{name: 245, category: '2009', value: 0.0322581, label: 'a descriptive perspective', special: 0},
{name: 246, category: '2008', value: 0.0212766, label: 'a historical', special: 0},
{name: 247, category: '2008', value: 0.0222222, label: 'a somewhat longer concluding synthesis (Ch.', special: 0},
{name: 248, category: '2009', value: 0.0333333, label: 'both from a formal', special: 0},
{name: 249, category: '2009', value: 0.346153, label: 'clearly written', special: 0},
{name: 250, category: '2009', value: 0.0454545, label: 'develop Generalised Template Theory (GTT', special: 0},
{name: 251, category: '2013', value: 1, label: 'di/pd Ajı´bo´ ye`', special: 0},
{name: 252, category: '2009', value: 0.030303, label: 'hypocoristic', special: 0},
{name: 253, category: '2008', value: 0.0196078, label: 'in between', special: 0},
{name: 254, category: '2009', value: 0.05, label: 'it meets the descriptive goal of presenting', special: 0},
{name: 255, category: '2009', value: 0.03125, label: 'non-concatenative systems', special: 0},
{name: 256, category: '2008', value: 0.0243902, label: 'proofreading', special: 0},
{name: 257, category: '2008', value: 0.325564, label: 'prosody', special: 0},
{name: 258, category: '2009', value: 0.027027, label: 'rather than the markedness', special: 0},
{name: 259, category: '2009', value: 0.0434783, label: 'see McCarthy', special: 0},
{name: 260, category: '2009', value: 0.047619, label: 'the arguments developed in Downing\'s book support', special: 0},
{name: 261, category: '2008', value: 0.0232558, label: 'the book should have a long shelf life', special: 0},
{name: 262, category: '2008', value: 0.0208333, label: 'theoretical chapter (Ch.', special: 0},
{name: 263, category: '2009', value: 0.0294118, label: 'truncation processes', special: 0},
{name: 264, category: '2009', value: 0.0285714, label: 'van der Hulst\'s (', special: 0},
];