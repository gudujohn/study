package structural.afflyweight;

public class test {
	public static void main(String[] args) {
		//一套代码，两种享元模式
		//1 简单享元模式 （不需要在考虑 非共享部分，不需要考虑外部状态的问题。）
		//红色，黄色，绿色。活动结束，不需要二维码了。
		BottleCap cap1 = CapFactory.getBottleCap("红色", null); //第二个参数，决定了外部状态
		BottleCap cap2 = CapFactory.getBottleCap("黄色", null);
		BottleCap cap3 = CapFactory.getBottleCap("绿色", null);
		System.out.println(cap1.getColor());
		System.out.println(cap1.getCode("张三的二维码"));
		
		BottleCap cap4 = CapFactory.getBottleCap("红色", null);
		System.out.println(cap4.getColor());
		System.out.println(cap4.getCode("张三的二维码"));
		
		
		//2 享元模式 考虑我们的外部状态
		System.out.println("=========================================");
		BottleCap cap5 = CapFactory.getBottleCap("红色", new NoCap());
		System.out.println(cap5.getColor());
		System.out.println(cap5.getCode("我的二维码"));
	}
}
