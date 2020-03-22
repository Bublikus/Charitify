<script>
    import { stores } from '@sapper/app'
    import { onMount } from 'svelte'
    import { api } from '@services'
    import {
        Br,
        Icon,
        Card,
        Avatar,
        Button,
        Footer,
        Picture,
        Progress,
        Comments,
        Carousel,
        FancyBox,
        Documents,
        TrustButton,
        DonatorsList,
        DonationButton,
    } from '@components'

    const { page } = stores()
    let charityId = $page.params.id

    // Entity
    let charity = {}
    $: carousel = (charity.avatars || []).map(p => ({ src: p, alt: 'photo' }))
    onMount(async () => {
        charity = await api.getFund(1)
    })

    // Trust button
    let active = false
    async function onClick() {
        active = !active
    }

    // Carousel & FancyBox
    let propsBox = {}
    function onCarouselClick({ detail }) {
        propsBox = { initIndex: detail.index }
    }

    // Avatar fancy
    let avatarFancy = false
</script>

<svelte:head>
    <title>Charitify - Charity page and donate.</title>
</svelte:head>

<style>
    table tr:not(:last-child) td {
        padding-bottom: 16px;
    }

    table td:last-child {
        font-weight: 300;
    }
</style>


<DonationButton/>

<section class="container scroll-box theme-bg-color-secondary">
    <Br size="30"/>


    <section class="flex" style="height: 200px">
        <FancyBox>
            <Carousel items={carousel} on:click={onCarouselClick}/>
            <div slot="box">
                <Carousel {...propsBox} items={carousel}/>
            </div>
        </FancyBox>
    </section>
    <Br size="40"/>


    <Button class="white">
        <div class="flex flex-align-center flex-justify-between full-width">
            <div class="flex flex-align-center">
                <s></s>
                <div class="flex" style="max-width: 45px; height: 40px; overflow: hidden">
                    <Picture
                            src="./assets/dimsirka.jpg"
                            size="contain"
                            alt="logo"
                    />
                </div>
                <s></s>
                <s></s>
                <s></s>
                <h3>"Дім Сірка"</h3>
            </div>
            <span style="font-size: 24px">
               →
            </span>
        </div>
    </Button>
    <Br size="20"/>


    <Card class="container">
        <Br size="20"/>

        <h2>Збережемо тварин разом</h2>
        <h3 class="font-w-normal" style="opacity: .7">Збір грошей на допомогу безпритульним тваринам</h3>

        <Br size="25"/>
        <p class="font-secondary">
            <span class="h1 font-w-500">₴ 3500</span>
            <span class="h3"> / ₴ 20000</span>
        </p>
        <Br size="20"/>

        <Progress value={Math.floor(3500 / 20000 * 100)}/>

        <Br size="40"/>
    </Card>
    <Br size="20"/>


    <p class="container flex flex-justify-between flex-align-center">
        <span class="flex flex-align-center">
            <Icon is="danger" type="heart-filled" size="medium"/>
            <s></s>
            <s></s>
            <span class="font-secondary font-w-600 h3">1</span>
        </span>
        <span class="flex flex-align-center">
            <Icon type="eye" size="medium" class="theme-svg-fill"/>
            <s></s>
            <s></s>
            <span class="font-secondary font-w-600 h3">13</span>
        </span>
    </p>
    <Br size="50"/>


    <h2>Збережемо тварин разом</h2>
    <Br size="10"/>
    <pre class="font-w-300">
        Терміново шукаємо добрі руки 🤲🥰
        Бадді підкинули під кафе біля самої траси!
        Біля нього були тільки залишки черствого хліба... 💔
        За що можна було покинути малюка напризволяще? 🥺
        В чому він міг провинитися? Йому всього 2 місяці.
        Зараз буде проходити обробку від паразитів та вакцинацію 💉
    </pre>
    <Br size="10"/>


    <p class="flex">
        <Button class="flex flex-align-center" auto size="small">
            <Icon type="share" size="medium" class="theme-svg-fill"/>
            <s></s>
            <s></s>
            <p class="font-w-500">Поділитись</p>
        </Button>
        <s></s>
        <s></s>
        <s></s>
        <s></s>
        <s></s>
        <Button class="flex flex-align-center" auto size="small">
            <Icon type="link" size="medium" class="theme-svg-fill"/>
            <s></s>
            <s></s>
            <p class="font-w-500">Скопіювати</p>
        </Button>
    </p>
    <Br size="45"/>


    <section class="flex flex-column flex-align-center flex-justify-center">
        <div style="width: 100px; max-width: 100%">
            <TrustButton isActive={active} on:click={onClick}/>
        </div>
        <Br size="10"/>
        <h2>Я довіряю</h2>
    </section>
    <Br size="60"/>


    <Card class="container">
        <Br size="30"/>

        <div class="flex flex-column flex-align-center">
            <span>
                <FancyBox>
                    <Avatar src="https://placeimg.com/300/300/animal" size="big" alt="Волтер"/>
                    <div slot="box">
                        <Avatar src="https://placeimg.com/300/300/animal" alt="Волтер"/>
                    </div>
                </FancyBox>
            </span>

            <Br size="20"/>

            <h2>Волтер</h2>
            <Br size="5"/>
            <h3 class="font-w-500" style="opacity: .7">Jack Russell Terrier</h3>
        </div>
        <Br size="35"/>

        <section class="flex flex-justify-center">
            <div class="flex flex-center relative" style="width: 90px; height: 90px; margin: 0 .8em">
                <Icon type="polygon" is="primary"/>
                <div class="text-white text-center absolute">
                    <h4 class="h1">3</h4>
                    <h4 style="margin-top: -8px">Роки</h4>
                </div>
            </div>

            <div class="flex flex-center relative" style="width: 90px; height: 90px; margin: 0 .8em">
                <Icon type="polygon" is="info"/>
                <div class="absolute flex" style="width: 44px; height: 44px">
                    <Icon type="male" is="light"/>
                </div>
            </div>

            <div class="flex flex-center relative" style="width: 90px; height: 90px; margin: 0 .8em; opacity: .3">
                <Icon type="polygon" is="primary"/>
                <div class="absolute flex flex-column flex-center">
                    <Icon type="cancel-circle" is="light" size="big"/>
                    <span class="text-white text-center h5">Cтерилізація</span>
                </div>
            </div>
        </section>
        <Br size="40"/>

        <h2>Характер Волтера: 😃</h2>
        <Br size="10"/>
        <p class="font-w-300">
            Дуже грайливий і милий песик. Любить проводити час з іншими собаками, дуже любить гратись з дітьми
        </p>
        <Br size="35"/>

        <h2>Життя Волтера</h2>
        <Br size="10"/>
        <table>
            <tbody>
            <tr>
                <td>01.02.2019</td>
                <td>—</td>
                <td>Його перший день народження</td>
            </tr>
            <tr>
                <td>05.02.2019</td>
                <td>—</td>
                <td>Ми приютили його з вулиці</td>
            </tr>
            <tr>
                <td>07.03.2019</td>
                <td>—</td>
                <td>Зробили вакцинацію проти бліх</td>
            </tr>
            <tr>
                <td>23.06.2019</td>
                <td>—</td>
                <td>Знайшов для себе улюблену іграшку</td>
            </tr>
            </tbody>
        </table>
        <Br size="45"/>

        <h2>Вакцинації</h2>
        <Br size="15"/>
        <ul class="flex flex-column text-left">
            <li>
                <span class="flex flex-align-center font-w-300">
                    <Icon is="primary" type="checked-circle" size="medium"/>
                    <s></s>
                    <s></s>
                    <s></s>
                    Від бліх
                </span>
            </li>
            <li>
                <Br size="10"/>
                <span class="flex flex-align-center font-w-300">
                    <Icon is="primary" type="checked-circle" size="medium"/>
                    <s></s>
                    <s></s>
                    <s></s>
                    Від паразитів
                </span>
            </li>
            <li>
                <Br size="10"/>
                <span class="flex flex-align-center font-w-300">
                    <Icon is="danger" type="cancel-circle" size="medium"/>
                    <s></s>
                    <s></s>
                    <s></s>
                    Від грибків
                </span>
            </li>
        </ul>

        <Br size="35"/>
    </Card>
    <Br size="60"/>


    <h1>Наші піклувальники</h1>
    <Br size="20"/>
    <div class="full-container">
        <DonatorsList/>
    </div>
    <Br size="60"/>


    <h1>Документи</h1>
    <Br size="5"/>
    <div class="full-container">
        <Documents/>
    </div>
    <Br size="45"/> 


    <h1>Відео про Волтера</h1>
    <Br size="20"/>
    <section class="flex" style="height: 200px">
        <Carousel items={carousel}/>
    </section>
    <Br size="60"/>


    <h1>Як допомогти</h1>
    <Br size="15"/>
    <ul style="list-style: disc outside none; padding-left: var(--screen-padding)" class="h3 font-w-500 font-secondary">
        <li style="padding-bottom: 5px">Ви пожете купити йому поїсти</li>
        <li style="padding-bottom: 5px">Можете особисто відвідати його у нас</li>
        <li style="padding-bottom: 5px">Купити вакцінацію для Волтера</li>
        <li style="padding-bottom: 5px">Допомогти любим інщим способом</li>
    </ul>
    <Br size="30"/>
    <div class="flex">
        <div class="flex flex-align-center font-secondary">
            <Icon size="medium" type="phone" class="theme-svg-fill-opposite"/>
            <s></s>
            <s></s>
            <h2>+38 (093) 205-43-92</h2>
        </div>
    </div>
    <Br size="5"/>
    <p class="font-w-300">Подзвоніть нам, якщо хочете допомогти Волтеру</p>
    <Br size="60"/>


    <h1>Коментарі</h1>
    <Br size="5"/>
    <div class="full-container">
        <Comments/>
    </div>
    <Br size="60"/>


    <div class="full-container">
        <Footer/>
    </div>
    <Br size="70"/>
</section>