document.getElementById('clone-voice').addEventListener('click', function () {
    // Create a new FormData object
    this.textContent = "Loading..."
    const formData = new FormData();

    // Append the 'user_prompt' parameter to FormData
    formData.append('user_prompt', 'A middle-aged female with an Australian accent, friendly and approachable, like a knowledgeable tour guide');

    // Make the API request to Resemble AI
    fetch('https://app.resemble.ai/api/v2/voice-design', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer avxB4nYpGduiaEQctHqLVgtt',
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // console.log('Response:', data);
            const {voice_candidates : voiceCandidates} = data
            if(voiceCandidates.length === 0)
                return;
            
            const [firstCandidate] = voiceCandidates
            // Replace these with actual values
            const voiceDesignModelUuid = 'your-voice-design-model-uuid'; // Replace with actual voice design model UUID
            const voiceSampleIndex = 'your-voice-sample-index'; // Replace with actual voice sample index

            // Construct the URL with the actual values
            const url = `https://app.resemble.ai/api/v2/voice-design/${firstCandidate.uuid}/${firstCandidate.voice_sample_index}/create_rapid_voice`;
            const formData = new FormData();
            formData.append('voice_name', 'My API Voice')
            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer avxB4nYpGduiaEQctHqLVgtt', // Replace with your actual API token
                },
                body: formData// Append the form data
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Response 2:', data);
                    
                })
                .catch(error => {
                    console.error('Error:', error);
                })
                .finally(response => {
                    this.textContent = "Clone Voice..."
                    console.log('finally response ', response)
                });

        })
        .catch(error => {
            console.error('Error:', error);
        });
});
