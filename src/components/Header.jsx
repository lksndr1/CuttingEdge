import TabsSection from './TabsSection'

export default function Header({ activeTab, onTabChange }) {

    return (
        <header>
            <a href="/">
                <img className='header-logo' src="/public/logo.jpg" alt="CE-logo" />
            </a>
            <TabsSection active={activeTab} onChange={onTabChange} />
        </header>
    )
}