package 创建型模式.builder;

public class SmartRobotBuilder implements RobotBuilder{

	Robot robot = new Robot();

	@Override
	public void createHead() {
		String head = "Head"; //低能儿
		String smartXinpian = "Smart"; //智能芯片
		String combiam = head+smartXinpian; //组装智能头
		robot.setHead(combiam);

	}

	@Override
	public void createBody() {
		robot.setBody("body");
	}

	@Override
	public void createLegs() {
		String leg = "Legs";
		String cutLeg = "Single";
		String finalLegs = leg+cutLeg;
		robot.setLegs(finalLegs);
	}

	@Override
	public Robot createRobot() {
		// TODO Auto-generated method stub
		return robot;
	}

}