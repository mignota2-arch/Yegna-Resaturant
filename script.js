// 1. MENU ITEMS ARRAY
const menuItems = [
    { id: 1,   name: "ፉል ኖርማል",                        price: 170,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_20_2026-05-09_01-02-51.jpg" },
    { id: 2,   name: "ፉል ስፔሻል",                        price: 200,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_20_2026-05-09_01-02-51.jpg" },
    { id: 3,   name: "ፈታ ኖርማል",                        price: 200,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_16_2026-05-09_01-02-51.jpg" },
    { id: 4,   name: "ፈታ ስፔሻል",                        price: 250,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_16_2026-05-09_01-02-51.jpg" },
    { id: 5,   name: "ፈጢራ ኖርማል",                       price: 220,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_17_2026-05-09_01-02-51.jpg" },
    { id: 6,   name: "ፈጢራ ስፔሻል",                       price: 250,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_17_2026-05-09_01-02-51.jpg" },
    { id: 7,   name: "ጨጨብሳ ኖርማል",                      price: 200,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_5_2026-05-09_01-02-51.jpg" },
    { id: 8,   name: "ጨጨብሳ ስፔሻል",                      price: 230,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_5_2026-05-09_01-02-51.jpg" },
    { id: 9,   name: "የአጃ ቂንጬ",                         price: 220,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_1_2026-05-09_01-02-51.jpg" },
    { id: 10,  name: "የአጃ ቂንጬ በቂቤ",                    price: 250,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_1_2026-05-09_01-02-51.jpg" },
    { id: 11,  name: "ቡላ ገንፎ የፃም",                      price: 250,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_4_2026-05-09_01-02-51.jpg" },
    { id: 12,  name: "ቡላ ገንፎ ስፔሻል",                    price: 300,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_4_2026-05-09_01-02-51.jpg" },
    { id: 13,  name: "ቡላ በዱለት",                         price: 400,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_4_2026-05-09_01-02-51.jpg" },
    { id: 14,  name: "እንቁላል ፍርፍር",                      price: 230,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_12_2026-05-09_01-02-51.jpg" },
    { id: 15,  name: "ፓን ኬክ",                           price: 230,  category: "Breakfast",               image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400" },
    { id: 16,  name: "እንቁላል ኦምሌት",                     price: 300,  category: "Breakfast",               image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=400" },
    { id: 17,  name: "እንቁላል ስልስ",                       price: 250,  category: "Breakfast",               image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_15_2026-05-09_01-02-51.jpg" },
    { id: 18,  name: "እንቁላል ሳንዱች በቂጣ",                 price: 250,  category: "Breakfast",               image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=400" },
    { id: 19,  name: "እንቁላል በስጋ",                       price: 300,  category: "Breakfast",               image: "https://tse4.mm.bing.net/th/id/OIP._geeRCTEc_7hxgsx3yJxPAHaEK?pid=Api&h=220&P=0" },
    { id: 20,  name: "የአትክልት ሳንዱች",                    price: 200,  category: "Sandwich & Wraps",        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400" },
    { id: 21,  name: "የስጋ ሳንዱች",                        price: 300,  category: "Sandwich & Wraps",        image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=400" },
    { id: 22,  name: "የቱና ሳንዱች",                        price: 400,  category: "Sandwich & Wraps",        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400" },
    { id: 23,  name: "ክለብ ሳንዱች",                        price: 400,  category: "Sandwich & Wraps",        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400" },
    { id: 24,  name: "ራፕስ",                             price: 400,  category: "Sandwich & Wraps",        image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_25_2026-05-09_01-02-51.jpg" },
    { id: 25,  name: "ቺክን ሻዋርማ",                        price: 400,  category: "Sandwich & Wraps",        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=400" },
    { id: 26,  name: "የፃም በርገር",                        price: 250,  category: "Burger & Pizza",          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400" },
    { id: 27,  name: "በርገር",                            price: 300,  category: "Burger & Pizza",          image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400" },
    { id: 28,  name: "ደብል በርገር",                        price: 350,  category: "Burger & Pizza",          image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=400" },
    { id: 29,  name: "ቺዝ በርገር",                         price: 400,  category: "Burger & Pizza",          image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400" },
    { id: 30,  name: "የኛ ስፔሻል በርገር",                   price: 450,  category: "Burger & Pizza",          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400" },
    { id: 31,  name: "ፒዛ በቢፍ",                          price: 450,  category: "Burger & Pizza",          image: "https://tse1.mm.bing.net/th/id/OIP.VusSL6rwPxDTHGc4O4SxcgHaE8?pid=Api&h=220&P=0" },
    { id: 32,  name: "ፒዛ በቺክን",                         price: 500,  category: "Burger & Pizza",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_30_2026-05-09_01-02-52.jpg" },
    { id: 33,  name: "ፒዛ በአሳ",                          price: 450,  category: "Burger & Pizza",          image: "https://tse4.mm.bing.net/th/id/OIP.0Dzh_QLY_9787m_xevEP_AHaE8?pid=Api&h=220&P=0" },
    { id: 34,  name: "ፒዛ በቱና",                          price: 500,  category: "Burger & Pizza",          image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400" },
    { id: 35,  name: "ፒዛ በአትክልት",                       price: 450,  category: "Burger & Pizza",          image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400" },
    { id: 36,  name: "ፒዛ በቺዝ",                          price: 500,  category: "Burger & Pizza",          image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400" },
    { id: 37,  name: "የኛ ስፔሻል ፒዛ",                     price: 550,  category: "Burger & Pizza",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_30_2026-05-09_01-02-52.jpg" },
    { id: 38,  name: "ሽሮ በድስት (የፃም)",                  price: 250,  category: "Lunch / Dinner",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_29_2026-05-09_01-02-52.jpg" },
    { id: 39,  name: "ሽሮ ተጋቢኖ በድስት (የፃም)",             price: 280,  category: "Lunch / Dinner",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_29_2026-05-09_01-02-52.jpg" },
    { id: 40,  name: "ሽሮ በድስት በቂቤ",                    price: 300,  category: "Lunch / Dinner",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_29_2026-05-09_01-02-52.jpg" },
    { id: 41,  name: "ሽሮ በድስት በቋንጣ",                   price: 350,  category: "Lunch / Dinner",          image: "https://tse4.mm.bing.net/th/id/OIP.steQmNmQeNWTE9H1WbegfAHaGv?pid=Api&h=220&P=0" },
    { id: 42,  name: "ቦዘና ሽሮ በድስት",                    price: 350,  category: "Lunch / Dinner",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_29_2026-05-09_01-02-52.jpg" },
    { id: 43,  name: "የፍየል ጥብስ",                        price: 450,  category: "Lunch / Dinner",          image: "https://i.ytimg.com/vi/EWu2OneysUQ/maxresdefault.jpg" },
    { id: 44,  name: "የአሳ ጥብስ",                         price: 450,  category: "Lunch / Dinner",          image: "https://tse1.mm.bing.net/th/id/OIP.NGO6WWuqOjlRAhYgfqNI6wHaEK?pid=Api&h=220&P=0" },
    { id: 45,  name: "የበግ ዱለት",                         price: 350,  category: "Lunch / Dinner",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_33_2026-05-09_01-02-52.jpg" },
    { id: 46,  name: "አሳ ጉላሽ",                          price: 400,  category: "Lunch / Dinner",          image: "https://tse2.mm.bing.net/th/id/OIP.kNUxS4nK-Uj7tUkwlMd4dAHaEK?pid=Api&h=220&P=0" },
    { id: 47,  name: "አሳ ኮተሌት",                         price: 450,  category: "Lunch / Dinner",          image: "https://tse3.mm.bing.net/th/id/OIP.jcTtoG5fYGxRJXK597zaOQHaDr?pid=Api&h=220&P=0" },
    { id: 48,  name: "የተጠበሰ አሳ (ቆሮሶ)",                  price: 500,  category: "Lunch / Dinner",          image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400" },
    { id: 49,  name: "የእንጀራ ፍርፍር (የፃም)",               price: 250,  category: "Lunch / Dinner",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_18_2026-05-09_01-02-51.jpg" },
    { id: 50,  name: "የእንጀራ ፍርፍር በቂቤ",                price: 300,  category: "Lunch / Dinner",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_18_2026-05-09_01-02-51.jpg" },
    { id: 51,  name: "የጥብስ ፍርፍር",                       price: 350,  category: "Lunch / Dinner",          image: "https://tse3.mm.bing.net/th/id/OIP.rIzVGjhp93Z6ZDt9i2oERwHaEK?pid=Api&h=220&P=0" },
    { id: 52,  name: "የቋንጣ ፍርፍር",                       price: 400,  category: "Lunch / Dinner",          image: "https://tse4.mm.bing.net/th/id/OIP.0LP1wePo5649hNWTejw1SwHaEK?pid=Api&h=220&P=0" },
    { id: 53,  name: "የድርቆሽ ፍርፍር (የፃም)",               price: 300,  category: "Lunch / Dinner",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_18_2026-05-09_01-02-51.jpg" },
    { id: 54,  name: "የድርቆሽ ፍርፍር በስጋ/በቂቤ",            price: 350,  category: "Lunch / Dinner",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_18_2026-05-09_01-02-51.jpg" },
    { id: 55,  name: "የሱፍ ፍትፍት",                        price: 250,  category: "Lunch / Dinner",          image: "https://tse4.mm.bing.net/th/id/OIP.PNJ5avja4TL5k73Z76AcwwHaEK?pid=Api&h=220&P=0" },
    { id: 56,  name: "የቲማቲም ፍትፍት/ስልስ/ቁርጥ",            price: 250,  category: "Lunch / Dinner",          image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_32_2026-05-09_01-02-52.jpg" },
    { id: 57,  name: "የበሰለ አትክልት",                      price: 300,  category: "Lunch / Dinner",          image: "https://tse4.mm.bing.net/th/id/OIP.7HBPf8Dh5q9pgwwgrIdQSAHaJ4?pid=Api&h=220&P=0" },
    { id: 58,  name: "ስፔሻል የበሰለ አትክልት",                price: 400,  category: "Lunch / Dinner",          image: "https://tse4.mm.bing.net/th/id/OIP.7HBPf8Dh5q9pgwwgrIdQSAHaJ4?pid=Api&h=220&P=0" },
    { id: 59,  name: "ኖርማል ሳላድ",                        price: 250,  category: "Lunch / Dinner",          image: "https://tse4.mm.bing.net/th/id/OIP.m72_htFwm3B29UMkV_N4ggHaHa?pid=Api&h=220&P=0" },
    { id: 60,  name: "ስፔሻል ሳላድ",                        price: 400,  category: "Lunch / Dinner",          image: "https://tse2.mm.bing.net/th/id/OIP.4x7fwF2C77I3Pi3TKNVNnQHaJQ?pid=Api&h=220&P=0" },
    { id: 61,  name: "ጎመን",                             price: 400,  category: "Lunch / Dinner",          image: "https://tse1.mm.bing.net/th/id/OIP.yQL9w-OZPHyXggNexi0n7AHaEo?pid=Api&h=220&P=0" },
    { id: 62,  name: "ጎመን ክትፎ",                         price: 250,  category: "Lunch / Dinner",          image: "https://tse4.mm.bing.net/th/id/OIP.M6y5pN-0b1mDwNNceMYlPAHaEK?pid=Api&h=220&P=0" },
    { id: 63,  name: "ጎመን ክትፎ በቂቤ",                    price: 350,  category: "Lunch / Dinner",          image: "https://tse1.mm.bing.net/th/id/OIP.yQL9w-OZPHyXggNexi0n7AHaEo?pid=Api&h=220&P=0" },
    { id: 64,  name: "ጎመን በስጋ",                         price: 400,  category: "Lunch / Dinner",          image: "https://tse2.mm.bing.net/th/id/OIP.i4r1NQydyTN9fHDPyWGWsgHaEK?pid=Api&h=220&P=0" },
    { id: 65,  name: "የኛ ስፔሻል የፃም/የፍስክ",               price: 1200, category: "Lunch / Dinner",          image: "https://tse3.mm.bing.net/th/id/OIP.RRQclrVOrR_laWv7n5weZQHaFj?pid=Api&h=220&P=0" },
    { id: 66,  name: "አገልግል የፃም/የፍስክ",                 price: 1000, category: "Lunch / Dinner",          image: "https://tse1.mm.bing.net/th/id/OIP.7fZDflecGyuFPQ1HPP309wHaEK?pid=Api&h=220&P=0" },
    { id: 67,  name: "ምላስ ሰንበር",                        price: 400,  category: "Lunch / Dinner",          image: "https://tse3.mm.bing.net/th/id/OIP.1asWam9m3IJkshdDmYwjaAHaEK?pid=Api&h=220&P=0" },
    { id: 68,  name: "ቅቅል",                             price: 450,  category: "Lunch / Dinner",          image: "https://tse2.mm.bing.net/th/id/OIP.Ik15Az9AZXI7b9EVv6dgBAAAAA?pid=Api&h=220&P=0" },
    { id: 69,  name: "የፃም በየአይነት",                      price: 300,  category: "Lunch / Dinner",          image: "https://tse1.mm.bing.net/th/id/OIP.4nLdX6La_lyNWs11BJKJ8gHaFj?pid=Api&h=220&P=0" },
    { id: 70,  name: "ምስር በስጋ",                         price: 350,  category: "Lunch / Dinner",          image: "https://tse2.mm.bing.net/th/id/OIP.b_2wJXp9jPOFXXt6YI1LKAHaFO?pid=Api&h=220&P=0" },
    { id: 71,  name: "ድንች በስጋ",                         price: 350,  category: "Lunch / Dinner",          image: "https://tse2.mm.bing.net/th/id/OIP.rThVQHofWfKLPZ_ZEhm7WwHaEK?pid=Api&h=220&P=0" },
    { id: 72,  name: "ስትሮቤሪ ሞሂቶ",                       price: 200,  category: "Juice / Mojito / Snacks", image: "https://tse4.mm.bing.net/th/id/OIP.uxLBHkj3fej7Kt3R6uAtUwHaJQ?pid=Api&h=220&P=0" },
    { id: 73,  name: "ጂንጀር ሞሂቶ",                        price: 200,  category: "Juice / Mojito / Snacks", image: "https://tse2.mm.bing.net/th/id/OIP.bdyrPVEwzOFkz3RMK_BEGAHaJh?pid=Api&h=220&P=0" },
    { id: 74,  name: "ሚንት ሞሂቶ",                         price: 200,  category: "Juice / Mojito / Snacks", image: "https://tse2.mm.bing.net/th/id/OIP.i84_BS7zCAOqCbt9TSIXMwHaLH?pid=Api&h=220&P=0" },
    { id: 75,  name: "ብርቱካን ሞሂቶ",                       price: 200,  category: "Juice / Mojito / Snacks", image: "https://tse2.mm.bing.net/th/id/OIP.FFz_8RW6xJ4zPAYX7UpMAAHaGL?pid=Api&h=220&P=0" },
    { id: 76,  name: "አናናስ ሞሂቶ",                        price: 200,  category: "Juice / Mojito / Snacks", image: "https://tse3.mm.bing.net/th/id/OIP.-UXpKmjNiUH1R8UhOQaz8gHaHa?pid=Api&h=220&P=0" },
    { id: 77,  name: "የኛ ስፔሻል ሞሂቶ",                    price: 250,  category: "Juice / Mojito / Snacks", image: "https://tse4.mm.bing.net/th/id/OIP.q8KalHPcw-nXwU1LiwfLmQHaHa?pid=Api&h=220&P=0" },
    { id: 78,  name: "አቮካዶ ጁስ",                         price: 170,  category: "Juice / Mojito / Snacks", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=400" },
    { id: 79,  name: "ፓፓዬ ጁስ",                          price: 170,  category: "Juice / Mojito / Snacks", image: "https://tse4.mm.bing.net/th/id/OIP.8VpP24VKM1i0s2ceI199DgHaLH?pid=Api&h=220&P=0" },
    { id: 80,  name: "ማንጎ ጁስ",                          price: 200,  category: "Juice / Mojito / Snacks", image: "https://tse3.mm.bing.net/th/id/OIP.TFohUAwJVrcbUWDOncXfRwHaE8?pid=Api&h=220&P=0" },
    { id: 81,  name: "ስፕሪስ ጁስ",                         price: 250,  category: "Juice / Mojito / Snacks", image: "https://tse1.mm.bing.net/th/id/OIP.D48lZfRVHm4RqZ062hGtmAHaLH?pid=Api&h=220&P=0" },
    { id: 82,  name: "የኛ ስሙዚ",                          price: 300,  category: "Juice / Mojito / Snacks", image: "https://tse1.mm.bing.net/th/id/OIP._bs_-9HEZeTSzmMZIOe0BAHaHa?pid=Api&h=220&P=0" },
    { id: 83,  name: "ፍሩት ፓንች",                         price: 350,  category: "Juice / Mojito / Snacks", image: "https://ik.imagekit.io/i9xd5ghuy/assets/photo_19_2026-05-09_01-02-51.jpg" },
    { id: 84,  name: "ቺፐስ",                             price: 200,  category: "Juice / Mojito / Snacks", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400" },
    { id: 85,  name: "ሻይ",                              price: 40,   category: "Hot Drinks",              image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400" },
    { id: 86,  name: "ሻይ በሎሚ",                          price: 50,   category: "Hot Drinks",              image: "https://tse4.mm.bing.net/th/id/OIP.ccQk5tSwwsDFrF8zNWSfmgHaHa?pid=Api&h=220&P=0" },
    { id: 87,  name: "ዝንጅብል ሻይ (ቅሽር)",                 price: 60,   category: "Hot Drinks",              image: "https://tse4.mm.bing.net/th/id/OIP.qs3Yuwi_Dc1PLfgE12LvyAHaE8?pid=Api&h=220&P=0" },
    { id: 88,  name: "ለውዝ ሻይ",                          price: 70,   category: "Hot Drinks",              image: "https://tse1.mm.bing.net/th/id/OIP.ZHfGpNlv0kDvXcH6sDsacgHaHa?pid=Api&h=220&P=0" },
    { id: 89,  name: "ስፔሻል ሻይ",                         price: 100,  category: "Hot Drinks",              image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400" },
    { id: 90,  name: "የጀበና/ስቲም ቡና",                     price: 40,   category: "Hot Drinks",              image: "https://tse3.mm.bing.net/th/id/OIP.eel_sHzGAxNq8elZjbCcGQHaE8?pid=Api&h=220&P=0" },
    { id: 91,  name: "የማሽን ቡና",                         price: 60,   category: "Hot Drinks",              image: "https://tse2.mm.bing.net/th/id/OIP.PZAaUNBsIfr3aee41trpKQHaJD?pid=Api&h=220&P=0" },
    { id: 92,  name: "ሻይ/ቡና ስፕሪስ",                     price: 60,   category: "Hot Drinks",              image: "https://tse2.mm.bing.net/th/id/OIP.ztnNqHkxw-7cwATS5Rz6ZQHaHa?pid=Api&h=220&P=0" },
    { id: 93,  name: "ወተት",                             price: 80,   category: "Hot Drinks",              image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400" },
    { id: 94,  name: "ማኪያቶ",                            price: 60,   category: "Hot Drinks",              image: "https://tse4.mm.bing.net/th/id/OIP.uI1FMZFO6LTKFrNJoYQv5QHaHc?pid=Api&h=220&P=0" },
    { id: 95,  name: "የፃም ማኪያቶ",                        price: 100,  category: "Hot Drinks",              image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400" },
    { id: 96,  name: "ካፌ ላቴ",                           price: 100,  category: "Hot Drinks",              image: "https://tse1.mm.bing.net/th/id/OIP.ZTykSak4MghWdHnwyQC_jgHaEJ?pid=Api&h=220&P=0" },
    { id: 97,  name: "ካፑቺኖ",                            price: 100,  category: "Hot Drinks",              image: "https://tse2.mm.bing.net/th/id/OIP.-RG2SRFwqdKRI4IYRGeYiwHaFj?pid=Api&h=220&P=0" },
    { id: 98,  name: "0.5/0.6 ሊትር ውሃ",                 price: 25,   category: "Cold Drinks / Extras",    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400" },
    { id: 99,  name: "አንድ ሊትር ውሃ",                     price: 35,   category: "Cold Drinks / Extras",    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400" },
    { id: 100, name: "ሁለት ሊትር ውሃ",                     price: 55,   category: "Cold Drinks / Extras",    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400" },
    { id: 101, name: "የጠርሙስ ለስላሳ",                      price: 50,   category: "Cold Drinks / Extras",    image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=400" },
    { id: 102, name: "አምቦ ውሃ",                          price: 50,   category: "Cold Drinks / Extras",    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400" },
    { id: 103, name: "የማልት መጠጥ",                        price: 70,   category: "Cold Drinks / Extras",    image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?auto=format&fit=crop&w=400" },
    { id: 104, name: "እርጎ በማር/በቸኮሌት/በስትሮበሪ",           price: 200,  category: "Cold Drinks / Extras",    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400" },
    { id: 105, name: "ቂጣ/ቦክስ/ፎይል/እንቁላል",               price: 40,   category: "Cold Drinks / Extras",    image: "https://tse4.mm.bing.net/th/id/OIP.SzkIXlGvHbc0x95yT6Q_pAHaC6?pid=Api&h=220&P=0" },
    { id: 106, name: "የጁስ/የትኩስ ካፕ",                    price: 20,   category: "Cold Drinks / Extras",    image: "https://tse4.mm.bing.net/th/id/OIP.SzkIXlGvHbc0x95yT6Q_pAHaC6?pid=Api&h=220&P=0" },
    { id: 107, name: "ጭማሪ ሰላጣ/ቺዝ/ቢፍ/አንጀራ",            price: 60,   category: "Cold Drinks / Extras",    image: "https://tse4.mm.bing.net/th/id/OIP.SzkIXlGvHbc0x95yT6Q_pAHaC6?pid=Api&h=220&P=0" },
    { id: 108, name: "ጭማሪ የዶሮ እግር/የዶሮ ስጋ",             price: 250,  category: "Cold Drinks / Extras",    image: "https://tse4.mm.bing.net/th/id/OIP.SzkIXlGvHbc0x95yT6Q_pAHaC6?pid=Api&h=220&P=0" },
    { id: 109, name: "ጭማሪ ሙሉ/ግማሽ ቱና",                 price: 250,  category: "Cold Drinks / Extras",    image: "https://tse4.mm.bing.net/th/id/OIP.SzkIXlGvHbc0x95yT6Q_pAHaC6?pid=Api&h=220&P=0" },
    { id: 110, name: "ጭማሪ ስጋ/ሙሉ እርጎ/አሳ",              price: 150,  category: "Cold Drinks / Extras",    image: "https://tse4.mm.bing.net/th/id/OIP.SzkIXlGvHbc0x95yT6Q_pAHaC6?pid=Api&h=220&P=0" },
    { id: 111, name: "ጭማሪ አይብ/አቮካዶ/ካቻፕ/እርጎ/ማዮኒዝ",    price: 60,   category: "Cold Drinks / Extras",    image: "https://tse4.mm.bing.net/th/id/OIP.SzkIXlGvHbc0x95yT6Q_pAHaC6?pid=Api&h=220&P=0" }
];

// ============================================================
// MENU PAGE LOGIC — only runs on menu.html
// ============================================================
if (document.getElementById('menuGrid')) {
    let cart = [];

    const categories = [...new Set(menuItems.map(item => item.category))];
    const categoryNav = document.getElementById('categoryNav');
    const menuGrid    = document.getElementById('menuGrid');

    // Build category buttons
    function renderCategories() {
        categories.forEach((cat, index) => {
            const btn = document.createElement('button');
            btn.className = `cat-btn ${index === 0 ? 'active' : ''}`;
            btn.innerText = cat;
            btn.onclick = () => {
                document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderMenu(cat);
            };
            categoryNav.appendChild(btn);
        });
    }

    // Render menu cards for a given category
    function renderMenu(category) {
        menuGrid.innerHTML = '';
        menuItems
            .filter(item => item.category === category)
            .forEach(item => {
                const card = document.createElement('div');
                card.className = 'menu-card';
                card.innerHTML = `
                    <img src="${item.image.trim()}" alt="${item.name}" loading="lazy">
                    <div class="menu-info">
                        <h3>${item.name}</h3>
                        <p>${item.price} ETB</p>
                        <button class="add-btn" onclick="addToCart(${item.id})">Add to Order</button>
                    </div>
                `;
                menuGrid.appendChild(card);
            });
    }

    // Add item to cart
    window.addToCart = function(id) {
        const item = menuItems.find(i => i.id === id);
        cart.push(item);
        updateCartUI();
    };

    // Remove item from cart
    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    // Refresh all cart UI elements
    function updateCartUI() {
        const cartBar      = document.getElementById('cartBar');
        const cartCount    = document.getElementById('cartCount');
        const cartTotal    = document.getElementById('cartTotal');
        const modalTotal   = document.getElementById('modalTotal');
        const cartItemsList = document.getElementById('cartItemsList');

        const total = cart.reduce((sum, item) => sum + item.price, 0);

        cartCount.innerText = `${cart.length} Items`;
        cartTotal.innerText = `${total} ETB`;
        modalTotal.innerText = total;

        if (cart.length > 0) {
            cartBar.classList.add('visible');
        } else {
            cartBar.classList.remove('visible');
            document.getElementById('cartModal').style.display = 'none';
        }

        cartItemsList.innerHTML = '';
        cart.forEach((item, index) => {
            cartItemsList.innerHTML += `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <span>
                        ${item.price} ETB
                        <button onclick="removeFromCart(${index})"
                            style="background:red;color:white;border:none;border-radius:3px;
                                   padding:2px 6px;margin-left:10px;cursor:pointer;">X</button>
                    </span>
                </div>
            `;
        });
    }

    // Show / hide cart modal
    window.toggleCartModal = function() {
        const modal = document.getElementById('cartModal');
        if (modal.style.display === 'flex') {
            modal.style.display = 'none';
        } else {
            if (cart.length > 0) modal.style.display = 'flex';
        }
    };

    // Send order to kitchen
    window.placeOrder = function() {
        const tableNumber = document.getElementById('tableNumber').value.trim();
        const phone       = document.getElementById('customerPhone').value.trim();

        if (!tableNumber) {
            alert("Please enter your Table Number before ordering.");
            return;
        }

        const total = cart.reduce((sum, item) => sum + item.price, 0);

        // Save order to localStorage so the staff dashboard can read it
        const newOrder = {
            table:     tableNumber,
            phone:     phone,
            items:     cart.map(item => ({ name: item.name, price: item.price })),
            total:     total,
            timestamp: new Date().toLocaleString()
        };

        let allOrders = JSON.parse(localStorage.getItem('restaurantOrders')) || [];
        allOrders.push(newOrder);
        localStorage.setItem('restaurantOrders', JSON.stringify(allOrders));

        alert(`✅ Order sent! Table ${tableNumber} — Total: ${total} ETB`);

        // Reset
        cart = [];
        document.getElementById('tableNumber').value = '';
        document.getElementById('customerPhone').value = '';
        updateCartUI();
        toggleCartModal();
    };

    // Initialise
    renderCategories();
    renderMenu(categories[0]);
}

// ============================================================
// CONTACT FORM LOGIC — only runs on contact.html
// ============================================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent. We will get back to you shortly.");
        contactForm.reset();
    });
}
document.addEventListener('DOMContentLoaded', () => {
    // Only selects slides within our specific background carousel
    const bgSlides = document.querySelectorAll('#background-only-carousel .bg-slide');
    let currentBgIndex = 0;

    function nextBackground() {
        bgSlides[currentBgIndex].classList.remove('active');
        currentBgIndex = (currentBgIndex + 1) % bgSlides.length;
        bgSlides[currentBgIndex].classList.add('active');
    }

    // Fades to the next image every 5 seconds (5000ms)
    setInterval(nextBackground, 5000);
});
