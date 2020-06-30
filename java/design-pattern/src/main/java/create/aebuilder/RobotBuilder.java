package create.aebuilder;

/**
 * 抽象建造者类，相对于工厂设计模式的抽象工厂类，但是区别：建造者类更加关注了机器人构建的细节
 * @author Administrator
 *
 */
public interface RobotBuilder {
	public void createHead(); //细节

	public void createBody();//细节

	public void createLegs();//细节

	/**
	 * 理解工厂设计模式与建造者模式的区别与相同点，可以从该类看一下。相同点是，都是为了创建产品，不同点事，建造者模式更加关注细节（请看上三个方法，工厂设计模式中只有一个create方法）
	 * @return
	 */
	public Robot createRobot();
}