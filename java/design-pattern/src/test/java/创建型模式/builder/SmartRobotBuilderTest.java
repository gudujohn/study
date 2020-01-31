package 创建型模式.builder;

public class SmartRobotBuilderTest {
	public static void main(String[] args) {
		Worker worker = new Worker();
		SmartRobotBuilder smartRobotBuilder = new SmartRobotBuilder();
		Robot r = worker.buildRobot(smartRobotBuilder);
		System.out.println(r.getHead());
//		StringBuffer sb;

		StringBuilder sb;
	}
}
