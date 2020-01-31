package 创建型模式.builder.factory;

/**
 * 只是为了简单的演示，目的是为了对比建造者模式
 *
 * 从现在代码来看，我们的属性设置，非常的直接，并不知道这三个属性有多少构建细节。
 * @author Administrator
 *
 */
public class RobotFactory {
	Robot crateRobot(){ //关注整体
		Robot robot = new Robot();
		robot.setHead("SmartHead");//?? 你这个smartHead从何而来？难道只是一个string吗？
		robot.setBody("body");
		robot.setLegs("SingleLegs");
		return robot;
	}
}