import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'

export const PopupExampleBasic = () => (
    <div>
        <Popup trigger={<Icon circular name='heart' />} wide='very'>
            Big Five personality characteristics represent the most widely used model for generally describing how a person engages with the world.
            The model includes five primary dimensions: Agreeableness, Conscientiousness, Extraversion, Emotional range and Openness. Each of these top-lebel dimensions has six facets
            that further characterize an individual according to the dimension. These are divided into needs and values. To learn more, visit https://console.bluemix.net/docs/services/personality-insights/models.html#models
        </Popup>
    </div>
);