package 创建型模式.prototype;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class Student implements Serializable {
	private static final long serialVersionUID = 5684323418642042025L;
	private String name;
	private Date birthday;

	// 请多多的关注以下两个属性
	private School school;
	private List<String> friends; // 这个是jdk自己封装的方法，没有办法让她去实现我们的cloneable接口。完蛋

	/**
	 * 核心方法，用于clone我们的Student对象 现在发现，我这个克隆方法，有一定的问题。因为，如果克隆出来的新对象改变一些属性的时候，我们的原型对象也会出现问题。 总结：浅克隆，不能够完全的去克隆我们的成员变量，只是一个地址值的引用。如果再不重新new属性值的情况下，会影响我们的原型对象。
	 * 
	 * @throws IOException
	 * @throws ClassNotFoundException
	 */
	public Student deepclone() throws IOException, ClassNotFoundException {
		// TODO Auto-generated method stub
		// 第一版 浅克隆
		// return (Student) super.clone();

		// 第二版 普通深克隆
		// Student student = (Student) super.clone();
		// student.school = school.clone();// 对于我们的类，如果想实现深度克隆，并且没有jdk自带的这种类（list，linked，array），我们可以考虑用这种深度克隆方式
		// //但是这种凡事是有缺点的，导致相关类都要被强制实现cloneable接口。
		//// student.friends = friends.clone();
		// return student;

		// 第三版 深度克隆（正版的深度克隆）深度克隆是基于 序列化接口的，与java.lang.cloneable无关。
		// 序列化方式克隆对象，其实是对流的操作复制。
		// 将对象写入到流力
		ByteArrayOutputStream bo = new ByteArrayOutputStream();
		ObjectOutputStream oo = new ObjectOutputStream(bo);
		oo.writeObject(this);// "当前对象"

		// 从流里将对象读出来
		ByteArrayInputStream bi = new ByteArrayInputStream(bo.toByteArray());
		ObjectInputStream oi = new ObjectInputStream(bi);
		Student student = (Student) oi.readObject();
		return student;

	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public School getSchool() {
		return school;
	}

	public void setSchool(School school) {
		this.school = school;
	}

	public List<String> getFriends() {
		return friends;
	}

	public void setFriends(List<String> friends) {
		this.friends = friends;
	}
}
