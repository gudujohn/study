package 创建型模式.builder.factory;

public class RobotFactoryTest {
	public static void main(String[] args) {
		RobotFactory robotFactory = new RobotFactory();
		Robot robot = robotFactory.crateRobot();
		System.out.println(robot.getHead());
	}
}
