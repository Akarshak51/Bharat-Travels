// Simple AI Chatbot for instant support
const chatbotWin = document.getElementById('chatbot-window');
function showBotMsg(msg){
  const p = document.createElement('p');
  p.textContent = msg;
  p.style.background = '#e9ecef';
  p.style.padding = '8px';
  p.style.borderRadius = '8px';
  chatbotWin.appendChild(p);
  chatbotWin.scrollTop = chatbotWin.scrollHeight;
}
chatbotWin.innerHTML = `
  <div style="font-weight:bold;">Ask us anything about India Tour Packages!</div>
  <input type="text" id="chatbot-input" placeholder="Type your question..." style="width:95%;padding:8px;border-radius:4px;margin-top:10px;">
`;
showBotMsg('Hi! I am your travel guide. Ask about packages or destinations, and I will try to help.');

chatbotWin.querySelector('#chatbot-input').addEventListener('keydown', function(e){
  if(e.key==='Enter'){
    const val = e.target.value.toLowerCase();
    if(val.includes('himalaya')||val.includes('trek')){
      showBotMsg('Our Himalaya Adventure includes trekking, rafting, and scenic views. Book through our form!');
    } else if(val.includes('beach')){
      showBotMsg('Goa Beaches are popular – sun, sand, and fun await! Check our Goa packages.');
    } else if(val.includes('wildlife')||val.includes('safari')){
      showBotMsg('Wildlife Safaris at Ranthambore and Corbett are thrilling! Would you like an itinerary?');
    } else if(val.includes('booking')){
      showBotMsg('Use the booking form on the site. Our experts will reach out promptly.');
    } else if(val.includes('heritage')||val.includes('culture')){
      showBotMsg('Explore Indian Heritage through our packages covering forts, palaces, and more.');
    } else{
      showBotMsg('We offer tours all over India! Which city/state or experience interests you?');
    }
    e.target.value = '';
  }
});
