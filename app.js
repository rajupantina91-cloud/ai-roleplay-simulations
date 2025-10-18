function startScenario(type){
  localStorage.setItem("scenario",type);
  window.location.href="simulation.html";
}
function sendMessage(){
  const msg=document.getElementById("message").value;
  if(!msg)return;
  const chat=document.getElementById("chat-window");
  let userDiv=document.createElement("div");
  userDiv.className="user-msg";
  userDiv.innerText="🧑: "+msg;
  chat.appendChild(userDiv);
  document.getElementById("message").value="";
  setTimeout(()=>{
    let aiDiv=document.createElement("div");
    aiDiv.className="ai-msg";
    aiDiv.innerText="🤖: That's interesting! Tell me more.";
    chat.appendChild(aiDiv);
    chat.scrollTop=chat.scrollHeight;
  },1000);
}
function endSimulation(){
  alert("Simulation Ended! Great job practicing.");
  window.location.href="index.html";
}
function saveScenario(){
  alert("Scenario Saved Successfully!");
  window.location.href="index.html";
}
function saveSettings(){
  const key=document.getElementById("openai-key").value;
  localStorage.setItem("openaiKey",btoa(key));
  alert("API Key Saved Locally!");
}
