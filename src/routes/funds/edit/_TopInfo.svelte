<script>
    import { createEventDispatcher } from 'svelte'
    import { EditCard, FormBuilder } from '@components'

    export let data = undefined
    export let withButtons = undefined
    export let submit = async () => {}

    const dispatch = createEventDispatcher()

    let formFields = [
        {
            label: 'Фотогалерея:',
            type: 'files',
            name: 'photos',
            meta: {
                multiple: true,
            }
        },
        {
            label: 'Організація:',
            type: 'select',
            name: 'organization._id',
            meta: {
                placeholder: 'Вибрати...',
                options: [
                    {
                        value: 'org1',
                        label: 'Організація 1',
                    },
                    {
                        value: '5f9576ac5b14e833e00305ce',
                        label: 'Організація 2',
                    },
                    {
                        value: 'org3',
                        label: 'Організація 3',
                    }
                ]
            }
        },
        {
            label: 'Назва фонду:',
            type: 'text',
            name: 'name',
            meta: {
                placeholder: 'Врятуємо її...',
                maxlength: 20,
            },
        },
        {
            label: 'Ціль фонду:',
            type: 'text',
            name: 'description',
            meta: {
                placeholder: 'Тільки спільними силами...',
                maxlength: 25,
            },
        },
        {
            label: 'Потрібно зібрати:',
            type: 'number',
            name: 'needed_sum',
            meta: {
                placeholder: 10,
                min: 10,
                max: 100000000,
            },
        },
    ]

    $: formValues = data || {}
    $: formErrors = {}

    async function onSubmit(e) {
        await submit(e)
    }

    function onCancel() {
        formValues = data
        dispatch('cancel')
    }
</script>

<EditCard {withButtons} form="top-info-form" on:cancel={onCancel}>
    <FormBuilder 
        id="top-info-form"
        items={formFields}
        data={formValues}
        errors={formErrors}
        submit={onSubmit}
        on:change
    />
</EditCard>   

