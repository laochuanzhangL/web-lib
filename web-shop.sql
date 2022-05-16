# Host: localhost  (Version: 5.7.36)
# Date: 2022-02-28 17:58:51
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "books"
#

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `writer` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `sort` varchar(255) DEFAULT NULL,
  `popular` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

#
# Data for table "books"
#

INSERT INTO `books` VALUES (1,'列宁主义论纲','李忠杰','15','http://124.222.80.162:8080/images/books/列宁主义论纲.png','社科类','0'),(3,'汉瓦','刘三解','22','http://124.222.80.162:8080/images/books/汉瓦.png','文化类','0'),(4,'梁启超','（日）狭间直树','18','http://124.222.80.162:8080/images/books/梁启超.png','文化类','0'),(5,'流年河','翰儒','17','http://124.222.80.162:8080/images/books/流年河.jpg','文艺类','0'),(6,'阿拉善的雪','汪泉','21','http://124.222.80.162:8080/images/books/阿拉善的雪.png','文艺类','0'),(7,'白狐','陈应松','18','http://124.222.80.162:8080/images/books/白狐.jpg','文艺类','1'),(8,'5G+','胡世良','24','http://124.222.80.162:8080/images/books/5G+.png','经管类','1'),(9,'财经中国','何秀超，王瑶琪','14','http://124.222.80.162:8080/images/books/财经中国.png','经管类','0'),(10,'大脑','加里.L.温克','19','http://124.222.80.162:8080/images/books/大脑.png','科技类','1'),(11,'回避型人类','冈田尊司','20','http://124.222.80.162:8080/images/books/回避型人类.jpg','科技类','1'),(12,'数学家的眼光','张景中','34','http://124.222.80.162:8080/images/books/数学家的眼光.jpg','教育类','0'),(13,'健康心理学','赵军燕','24','http://124.222.80.162:8080/images/books/健康心理学.jpg','教育类','0'),(14,'男孩阿墨系列','叶梦','25','http://124.222.80.162:8080/images/books/男孩阿墨系列.jpg','少儿类','0'),(15,'成长第一次','服部千春','24','http://124.222.80.162:8080/images/books/成长第一次.jpg','少儿类','0'),(16,'故事识别','张怡微','27','http://124.222.80.162:8080/images/books/故事识别.png','文艺类','1'),(17,'到山中去','张晓风','17','http://124.222.80.162:8080/images/books/到山中去.png','文艺类','0'),(18,'常识骗了你','余勇波','27','http://124.222.80.162:8080/images/books/常识骗了你.png','社科类','1'),(19,'江口望海潮','许倬云','15','http://124.222.80.162:8080/images/books/江口望海潮.jpg','文化类','0'),(20,'地球之虹','（意）梅毕娜，肖云儒','35','http://124.222.80.162:8080/images/books/地球之虹.png','文化类','0'),(21,'探秘北京冬奥会','谢军','37','http://124.222.80.162:8080/images/books/探秘北京冬奥会.png','少儿类','0'),(22,'传播学原来很有趣','梁萍','41','http://124.222.80.162:8080/images/books/传播学原来很有趣.png','教育类','0'),(23,'智慧营销','渠成','28','http://124.222.80.162:8080/images/books/智慧营销.png','经管类','0'),(24,'生活即变化','（英）朱丽娅.塞缪尔','30','http://124.222.80.162:8080/images/books/生活即变化.jpg','科技类','0'),(28,'国家何以兴衰','周文','29','http://124.222.80.162:8080/images/books/国家何以兴衰.jpg','社科类','1'),(29,'幸福的旋律','吉米平阶','27','http://124.222.80.162:8080/images/books/幸福的旋律.jpg','社科类','1'),(30,'读唐诗 览名胜','语文出版社','37','http://124.222.80.162:8080/images/books/读唐诗.jpg','教育类','0'),(31,'从战略到执行','逢增钢，汤晶淇','31','http://124.222.80.162:8080/images/books/从战略到执行.png','经管类','0'),(32,'Bootstrap前端开发','刘荣英','27','http://124.222.80.162:8080/images/books/Bootstrap前端开发.png','科技类','0'),(33,'重建幸福力','周伯荣','29','http://124.222.80.162:8080/images/books/重建幸福力.jpg','科技类','0'),(34,'七个不算太暗的夜晚','熊德启','35','http://124.222.80.162:8080/images/books/七个不算太暗的夜晚.png','文艺类','0'),(35,'无法放回的生活','徐则臣','24','http://124.222.80.162:8080/images/books/无法放回的生活.jpg','文艺类','0');

#
# Structure for table "bookshelf"
#

DROP TABLE IF EXISTS `bookshelf`;
CREATE TABLE `bookshelf` (
  `key` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT '1',
  `picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

#
# Data for table "bookshelf"
#

INSERT INTO `bookshelf` VALUES (52,'wangyong','列宁主义论纲','1.5',4,'http://127.0.0.1:7001/public/books/列宁主义论纲.png'),(53,'wangyong','汉瓦','2.2',5,'http://127.0.0.1:7001/public/books/汉瓦.png'),(54,'wangyong','梁启超','1.8',1,'http://127.0.0.1:7001/public/books/梁启超.png'),(71,'lucongzheng','柠檬','2.1',1,'http://127.0.0.1:7001/public/vegetables/柠檬.jpg'),(72,'lucongzheng','椰子','2.1',1,'http://127.0.0.1:7001/public/vegetables/椰子.jpg');

#
# Structure for table "managers"
#

DROP TABLE IF EXISTS `managers`;
CREATE TABLE `managers` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(12) DEFAULT NULL,
  `password` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "managers"
#

INSERT INTO `managers` VALUES (1,'lucongzheng','www.lcz.com'),(2,'wangyong','admin');

#
# Structure for table "myvegetables"
#

DROP TABLE IF EXISTS `myvegetables`;
CREATE TABLE `myvegetables` (
  `key` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "myvegetables"
#


#
# Structure for table "orders"
#

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `time` date DEFAULT NULL,
  `money` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "orders"
#

INSERT INTO `orders` VALUES (4,'lucongzheng',8,'1213311313','2021-12-02','176.0','231','李芬21'),(6,'lucongzheng',2,'12345678911','2022-02-22','4.2','重庆市南岸区','张三');

#
# Structure for table "sequelizemeta"
#

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "sequelizemeta"
#

INSERT INTO `sequelizemeta` VALUES ('20211124161342-init-users.js');

#
# Structure for table "users"
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

#
# Data for table "users"
#

INSERT INTO `users` VALUES (9,'lucongzheng','www.lcz.com');

#
# Structure for table "vegetables"
#

DROP TABLE IF EXISTS `vegetables`;
CREATE TABLE `vegetables` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `sort` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `popular` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `plant` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

#
# Data for table "vegetables"
#

INSERT INTO `vegetables` VALUES (1,'柠檬','柑橘类','2.1','0','http://124.222.80.162:8080/images/vegetables/柠檬.jpg','难'),(2,'哈密瓜','瓜果类','2.5','1','http://124.222.80.162:8080/images/vegetables/哈密瓜.jpg','难'),(3,'葡萄','浆果类','2.5','0','http://124.222.80.162:8080/images/vegetables/葡萄.jpg','易'),(4,'芦笋','根茎叶类','2.5','0','http://124.222.80.162:8080/images/vegetables/芦笋.jpg','易'),(5,'白菜','叶菜类','2.5','1','http://124.222.80.162:8080/images/vegetables/白菜.jpg','易'),(6,'毛豆','豆菜类','2.5','0','http://124.222.80.162:8080/images/vegetables/毛豆.jpg','中'),(7,'芒果','热带水果类','2.5','0','http://124.222.80.162:8080/images/vegetables/芒果.jpg','难'),(8,'荔枝','热带水果类','2.5','1','http://124.222.80.162:8080/images/vegetables/荔枝.jpg','难'),(9,'龙眼','热带水果类','2.5','1','http://124.222.80.162:8080/images/vegetables/龙眼.jpg','难'),(10,'椰子','热带水果类','2.5','0','http://124.222.80.162:8080/images/vegetables/椰子.jpg','难'),(11,'桑椹','浆果类','2.5','0','http://124.222.80.162:8080/images/vegetables/桑椹.jpg','易'),(12,'蓝莓','浆果类','2.5','0','http://124.222.80.162:8080/images/vegetables/蓝莓.jpg','难'),(13,'柿子','浆果类','2.5','0','http://124.222.80.162:8080/images/vegetables/柿子.jpg','易'),(14,'橙子','柑橘类','2.5','1','http://124.222.80.162:8080/images/vegetables/橙子.jpg','中'),(15,'金桔','柑橘类','2.5','1','http://124.222.80.162:8080/images/vegetables/金桔.jpg','难'),(16,'西瓜','瓜果类','2.5','0','http://124.222.80.162:8080/images/vegetables/西瓜.jpg','易'),(17,'胡萝卜','根茎叶类','2.5','0','http://124.222.80.162:8080/images/vegetables/胡萝卜.jpg','中'),(18,'魔芋','根茎叶类','2.5','0','http://124.222.80.162:8080/images/vegetables/魔芋.jpg','难'),(19,'木薯','根茎叶类','2.5','1','http://124.222.80.162:8080/images/vegetables/木薯.jpg','易'),(20,'山药','根茎叶类','2.5','0','http://124.222.80.162:8080/images/vegetables/山药.jpg','易'),(21,'生菜','叶菜类','2.5','0','http://124.222.80.162:8080/images/vegetables/生菜.jpg','易'),(22,'油麦菜','叶菜类','2.5','1','http://124.222.80.162:8080/images/vegetables/油麦菜.jpg','易'),(23,'空心菜','叶菜类','2.5','0','http://124.222.80.162:8080/images/vegetables/空心菜.jpg','易'),(25,'莴笋','叶菜类','2.5','1','http://124.222.80.162:8080/images/vegetables/莴笋.jpg','易'),(26,'刀豆','豆菜类','2.5','1','http://124.222.80.162:8080/images/vegetables/刀豆.jpg','易');
