package create.aebuilder;

/**
 * Director ָ指挥者
 * @author Administrator
 *
 */
public class Worker {
	
	public Robot buildRobot(RobotBuilder robotBuilder){
		robotBuilder.createHead();
		robotBuilder.createBody();
		robotBuilder.createLegs();
		return robotBuilder.createRobot();
	}
}
