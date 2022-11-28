import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddStaffScreen from './Screens/AddStaffScreen';
import DirectoryScreen from './Screens/DirectoryScreen'
import StaffScreen from './Screens/StaffScreen';
import StartScreen from './Screens/StartScreen';
import AddDepartmentScreen from './Screens/AddDepartmentScreen';
import DepartmentScreen from './Screens/DepartmentScreen';
import ModifyDepartment from './Screens/ModifyDepartment'
import ModifyPeople from './Screens/ModifyPeople'
import ViewAllStaff from './Screens/ViewAllStaff'
import {ViewSingleStaff} from './Screens/ViewSingleStaff'
import { InspectEmployee } from './Screens/InspectEmployee';

export default function App() {
    const Stack = createStackNavigator();
  
    return (<>
    <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="DirectoryScreen" component={DirectoryScreen} />
            <Stack.Screen name="DepartmentScreen" component={DepartmentScreen} />
            <Stack.Screen name="StaffScreen" component={StaffScreen} />
            <Stack.Screen name="AddStaffScreen" component={AddStaffScreen} />
            <Stack.Screen name="AddDepartmentScreen" component={AddDepartmentScreen} />
            <Stack.Screen name="ModifyDepartment" component={ModifyDepartment} />
            <Stack.Screen name="ModifyPeople" component={ModifyPeople} />
            <Stack.Screen name="ViewAllStaff" component={ViewAllStaff} />
            <Stack.Screen name="ViewSingleStaff" component={ViewSingleStaff} />
            <Stack.Screen name="InspectEmployee" component={InspectEmployee} />



  
          </Stack.Navigator>
        </NavigationContainer>
    
    
    </>)
  }
