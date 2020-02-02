package 创建型模式.prototype;

import 创建型模式.prototype.School;
import 创建型模式.prototype.Student;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ProtoTypeTest {

	public static void main(String[] args) throws CloneNotSupportedException, ClassNotFoundException, IOException {
		Student s1 = new Student();
		s1.setName("张三");
		s1.setBirthday(new Date(0));
		List<String> friends = new ArrayList<String>();
		friends.add("张小三");
		s1.setFriends(friends);
		School school = new School();
		school.setName("剑桥大学");
		s1.setSchool(school);

		Student s2 = s1.deepclone();
		s2.setName("李四"); //现在我们的属性值“李四”是直接书写的，对于string类型的，他是一个final类，不允许继承复写
		//以及修改。所以说，直接写“李四” 代表的是新建一个String。 "李四"这个字符创就相当于new String（“李四”）
		s2.setBirthday(new Date());//同理，我们的日期，也是通过new关键字创建的

		s2.getFriends().add("李小四"); //这里呢，并没有新建一个arraylist，而是使用的原来的
		s2.getSchool().setName("家里蹲大学");//这里的school也是使用的原来的

		// ???? 老师，如果我这里从新new 一个list ，new一个school，然后将s2的属性值set进去，会不会影响
		//s1的属性呢？
		//答案： 不会影响。但是，如果复制完对象之后，所有的属性值，都让你从新new一个对象的话，请问，我用clone技术还有什么用。
		//我直接创建新的对象不就行了吗？ 但是，还要考虑，我们的对象复杂程度是未知的，如果这个对象非常复杂，那么创建成本会很高

		System.out.println("姓名=========");
		System.out.println(s1.getName());
		System.out.println(s2.getName());
		System.out.println("生日=========");
		System.out.println(s1.getBirthday());
		System.out.println(s2.getBirthday());
		System.out.println("朋友=========");
		System.out.println(s1.getFriends().get(0) + "  " + s1.getFriends().size());
		System.out.println(s2.getFriends().get(0) + "  " + s2.getFriends().size()+ "  " +s2.getFriends().get(1));
		System.out.println("学校=========");
		System.out.println(s1.getSchool().getName());
		System.out.println(s2.getSchool().getName());

	}
}