import AddRole from "./pages/admin/add-role";
import Blank from "./pages/blank";
import UserHome from "./pages/user-home";
import VaccineRegistration from "./pages/vaccine-registration";

export default {
    USER: [
        {
            label: 'Home',
            href: '/',
            Component: UserHome
        },
        {
            label: 'Registration',
            href: '/vaccine-registration',
            Component: VaccineRegistration
        },
        {
            label: 'Feedback',
            href: '/user-feedback',
            Component: Blank
        },
        {
            label: 'Check Vaccine Legitemecy',
            href: '/validate-vaccine',
            Component: Blank
        }
    ],
    DOCTOR: [
        {
            label: 'Home',
            href: '/',
            Component: Blank
        },
        {
            label: 'Vaccinate',
            href: '/vaccinate',
            Component: Blank
        }
    ],
    ADMIN: [
        {
            label: 'Home',
            href: '/',
            Component: AddRole
        }
    ]
}