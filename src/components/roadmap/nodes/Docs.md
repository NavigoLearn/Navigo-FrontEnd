I will write here some notes about how the node editing works
The roadmap has its initial edit or view states which suffice for editing tabs
But when it comes to nodes we need to have a nested edit or view state
nested inside the edit state of the roadmap.
For example when editing the title you shouldn't be able to click and open a tab
so that leads to a separation of the edit and view states inside the already editing mode
of the roadmap. <br/>
<br/>
That is why I created the State manager component. The flow is the following<br/>
You have some root component containing multple properties that can be edited<br/>
This root component has a state of all the properties that can be edited and the properties wrapped in the state
manager<br/>
The state manager component is a wrapper around the editable state components that is means to hold all the logic
related to changing the
local state of root component and saving it to the roadmapEdit store (or maybe other store if you pass the proper
function)
<br/>
Each property that is using the statemanager wrapper is meant to have a noneditcomponent and an editcomponent. The state
manager
does the switching between components and saving of the properties from the components to the root storage or to the
permanent storage<br/>
The state manager is meant to be used for each property a node has along with the proper nonedit and edit components of
that property<br/>
<br/>
So to summarize
<br/>
root component -> local state management + the state managers for all properties
<br/>
state manager ->  manages state changes in root component and saving to the permanent storage
<br/>
nonedit and edit components -> the components that are used to display the property and use callbacks when something
changes (callbacks that are passed from the state manager + any additional logic that is needed)