import './index.css'
import { 
  createI18nProvider,
  useTranslation
} from 'ziko-i18n';
import {tags} from 'ziko/dom'
import locals from './locals.json'

createI18nProvider('en', locals)

const App = () =>{
  const { a, span, button : btn, nav} = tags
  const [t, setLang] = useTranslation()
  return nav(
    a({href : "#"}, t('home')),
    a({href : "#"}, t('about')),
    a({href : "#"}, t('start')),
    a({href : "#"}, t('components')),
    span(
      btn('En').onClick(()=>setLang('en')),
      btn('Fr').onClick(()=>setLang('fr')),
      btn('Es').onClick(()=>setLang('es'))
    )
  )
} 
App().mount(document.body)


