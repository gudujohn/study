package 结构型模式.decorator;

public class test {

	public static void main(String[] args) {
		System.out.println("С����ԣ�");
		Cake cakeImpl = new CakeImpl();
		System.out.println(cakeImpl.nameDetail() + "$" + cakeImpl.price());
		System.out.println("======");
		System.out.println("С����ԣ�");
		Cake cake = new EggCakeDecorator(cakeImpl);
		System.out.println(cake.nameDetail() + "$" + cake.price());
		System.out.println("======");
		System.out.println("����ͬѧ��ԣ�");

		// ����ʶ����������˳�������̡��������У����ǽ�����ˮ�������ĳ���ʱ�����ܻ�Ƚ��ϸ�İѿ����ǵ��������̡�
		// Ҳ����˵��װ����ģʽ����������˲���ϸ�ڵ�װ�Σ����ܹ������ǲ��������̣��ṩ�ܺõض�̬���÷�ʽ��
		Cake eggCake = new EggCakeDecorator(cakeImpl);
		Cake meetCake = new MeetCakeDecorator(eggCake);
		Cake milkCake = new MilkCakeDecorator(meetCake);

		System.out.println(milkCake.nameDetail() + "$" + milkCake.price());

	}
}
