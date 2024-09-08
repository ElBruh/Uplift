const queryAIBtn = document.getElementById('query-ai');
const moodSelect = document.getElementById('mood-select');
const moodInputText = document.getElementById('mood-input-text');
const charCount = document.getElementById('char-count');
const maxLength = moodInputText.getAttribute('maxlength');
const moodRating = document.getElementById('mood-rating');
const moodRatingValue = document.getElementById('mood-rating-value');
const responseText = document.getElementById('response-text');
const iconMorph = document.querySelector('.response-icon');


moodSelect.addEventListener('change', () => {
    const moodPlaceholders = {
        happy: "What's making you happy today?",
        sad: "It's okay to feel sad. Want to talk about it?",
        excited: "What's got you excited? Share your joy!",
        stressed: "Stress can be tough. How are you coping?",
        relaxed: "Feeling relaxed? What's your secret?",
    };
    moodInputText.placeholder = moodPlaceholders[moodSelect.value] || "I'm feeling...";
});

moodRating.addEventListener('input', () => {
    moodRatingValue.textContent = moodRating.value;
});

moodInputText.addEventListener('input', () => {
    const remaining = maxLength - moodInputText.value.length;
    charCount.textContent = `${remaining} characters remaining`;
});

queryAIBtn.addEventListener('click', async () => {
    const mood = moodSelect.value;
    const moodDescription = moodInputText.value.trim();
    const moodIntensity = moodRating.value;

    if (!mood) {
        alert('Please select a mood from the dropdown.');
        return;
    }

    if (!moodDescription) {
        alert('Please provide a description of your mood or thoughts.');
        return;
    }

    if (!moodIntensity) {
        alert('Please rate the intensity of your mood.');
        return;
    }
    // Change button text to indicate loading and disable the button
    queryAIBtn.textContent = 'Loading...';
    queryAIBtn.disabled = true;
    iconMorph.classList.add('loading');
    // Send the mood, moodDescription, and moodIntensity to the server
    try {
        const response = await fetch('/send_message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mood, moodDescription, moodIntensity }),
        });
        if (response.ok) {
            const data = await response.json();
            const formattedResponse = data.text.replace(/\n/g, '<br>');
            responseText.innerHTML = formattedResponse;
        } else {
            console.error('Error:', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        queryAIBtn.textContent = 'Get AI Response';
        queryAIBtn.disabled = false;
        iconMorph.classList.remove('loading');
    }
});