package structural.addecorator;

//基础的对象类。一个原型（没有升级的对象）。这个原型，是需要被修饰具体类一步一步的进行行为扩充的。
public class CakeImpl implements Cake{

	@Override
	public String nameDetail() {
		return "原味手抓饼";
	}

	@Override
	public Double price() {
		return 5.0;
	}
}
